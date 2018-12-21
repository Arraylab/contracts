
# CVN Token Contract

总包含两种合约：代币合约和锁仓合约

合约代码文件如下：
CvnToken.sol
TokenVesting.sol
TokenTimeLock.sol

代币合约是普通的ERC20，CvnToken.sol是代币合约

锁仓类型分为两种：一是分批解锁，锁仓时间为两年，每半年解锁1/4；一是锁仓半年，一次性解锁

其中TokenVesting.sol是分批解锁合约，tokenTimeLock.sol是一次性解锁合约


## 部署过程

1. 先部署cvnToken.sol合约，即ERC20代币合约，得到合约地址contract_addr1;

2. 再分别部署两个锁仓合约，构造函数里的token参数填写contract_addr1, 其他参数根据锁仓时间/受益人以及解锁周期填写，分别得到两个合约地址contract_addr2和contract_addr3;

3. 用代币合约中的owner地址，分别向第2步中的两个合约地址转账，金额为将锁仓的代币数量；

4. 等到了解锁时间，用owner地址调用这两个合约中的release函数，则解锁的代币会自动转到受益人地址；


## 详细部署步骤

1. 安装metamask [https://metamask.io/](https://metamask.io/)

2. 导航到remix在线以太坊合约平台 [https://remix.ethereum.org/](https://remix.ethereum.org/)

3. 点击settings -> choose your compiler(目前选择0.4.24+commit)

4. 登录metamsk，选择网络mainnet(最好先在测试网ropsten test network上测试一下，可以从水龙头获得免费的测试网代币ETH)

5. 返回编译栏，删掉示例代码，粘贴上自己的合约代码(自动编译)

6. 点击run按钮，如果需要输入构造函数参数，则先填入相应参数再运行

7. 这时metamask会打开，选择你的gas price，点击Submit，签名你的交易

8. 一旦部署成功，在[etherscan](https://etherscan.io/) 上可以通过合约地址查到该合约


## 构造函数参数

代币合约不用传参数，但两个锁仓合约需要传入参数来初始化

其中分批解锁合约TokenVesting.sol:
```
_beneficiary: address类型，解锁后接收人地址
_start: uint256，锁仓开始的时间
_duration: uint256, 锁仓持续时间
_revocable: bool, 是否可回收，True表示可通过owner调用revoke方法取消锁仓，False则表示不能取消
```

TokenTimeLock.sol: 
```
token: address, 需要锁仓的代币合约地址
beneficiary: address, 解锁后接收人地址
releaseTime: uint256, 解锁时间，时间戳表示
```

