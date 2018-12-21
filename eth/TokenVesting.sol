pragma solidity ^0.4.24;

import "./SafeERC20.sol";
import "./SafeMath.sol";
import "./Ownable.sol";

/**
 * @title TokenVesting
 * @dev A token holder contract that can release its token balance gradually like a
 * typical vesting scheme, with vesting period. Optionally revocable by the
 * owner.
 */
contract TokenVesting is Ownable {
  using SafeMath for uint256;
  using SafeERC20 for ICvnToken;

  event Released(uint256 amount);
  event Revoked();

  // beneficiary of tokens after they are released
  address public beneficiary;

  // duration in seconds of every unlock time
  uint256 public period;
  uint256 public start;
  uint256 public duration;

  bool public revocable;

  mapping (address => uint256) public released;
  mapping (address => bool) public revoked;

  /**
   * @dev Creates a vesting contract that vests its balance of any ERC20 token to the
   * _beneficiary, gradually in a linear fashion until _start + _duration. By then all
   * of the balance will have vested.
   * @param _start the time (as Unix time) at which point vesting starts
   * @param _duration duration in seconds of the period in which the tokens will vest
   * @param _revocable whether the vesting is revocable or not
   */
  constructor(
    address _beneficiary,
    uint256 _start,
    uint256 _duration,
    bool _revocable
  )
    public
  {
    require(_beneficiary != address(0));
    require(_start > block.timestamp);

    beneficiary = _beneficiary;
    revocable = _revocable;
    duration = _duration;
    period = _duration.div(4);
    start = _start;
  }

  /**
   * @notice Transfers vested tokens to beneficiary.
   * @param _token ICvnToken token which is being vested
   */
  function release(ICvnToken _token) public {
    uint256 unreleased = releasableAmount(_token);

    require(unreleased > 0);

    released[_token] = released[_token].add(unreleased);

    _token.safeTransfer(beneficiary, unreleased);

    emit Released(unreleased);
  }

  /**
   * @notice Allows the owner to revoke the vesting. Tokens already vested
   * remain in the contract, the rest are returned to the owner.
   * @param _token ERC20 token which is being vested
   */
  function revoke(ICvnToken _token) public onlyOwner {
    require(revocable);
    require(!revoked[_token]);

    uint256 balance = _token.balanceOf(address(this));

    uint256 unreleased = releasableAmount(_token);
    uint256 refund = balance.sub(unreleased);

    revoked[_token] = true;

    _token.safeTransfer(_owner, refund);

    emit Revoked();
  }

  /**
   * @dev Calculates the amount that has already vested but hasn't been released yet.
   * @param _token ICvnToken token which is being vested
   */
  function releasableAmount(ICvnToken _token) public view returns (uint256) {
    return vestedAmount(_token).sub(released[_token]);
  }

  /**
   * @dev Calculates the amount that has already vested.
   * @param _token ERC20 token which is being vested
   */
  function vestedAmount(ICvnToken _token) public view returns (uint256) {
    uint256 currentBalance = _token.balanceOf(this);
    uint256 totalBalance = currentBalance.add(released[_token]);
    
    if (block.timestamp < start.add(period)) {
      return 0;
    } else if (block.timestamp >= start.add(duration) || revoked[_token]) {
      return totalBalance;
    } else if (block.timestamp < start.add(period.mul(2))) {
      return totalBalance.div(4);
    } else if (block.timestamp < start.add(period.mul(3))) {
      return totalBalance.div(2);
    } else if (block.timestamp < start.add(duration)) {
      return totalBalance.mul(3).div(4);
    }
  }

  // can accept ether
  function() payable {}
}
