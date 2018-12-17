function getRoll(serverSeed, clientSeed, play_id) {
  var hash = sha256(serverSeed + clientSeed + play_id);
  return parseInt(hash, 16) % 100 + 1;
}

var $serverSeed = $('#serverSeed');
var $clientSeed = $('#clientSeed');
var $play_id = $('#play_id');
var $serverSeedHash = $('#serverSeedHash');
var $roll = $('#roll');

var url = $.url(document.location.href);

$serverSeed.val(url.param('serverSeed'));
$clientSeed.val(url.param('clientSeed'));
$play_id.val(url.param('play_id'));

$('form').keyup(function() {
  var serverSeed = $serverSeed.val();
  var clientSeed = $clientSeed.val();
  var play_id = $play_id.val();

  $serverSeedHash.val(serverSeed ? sha256(serverSeed) : '<Empty Server Seed>');

  if (!serverSeed) {
    $roll.val('<Empty Server Seed>');
  } else if (!clientSeed) {
    $roll.val('<Empty Client Seed>');
  } else if (play_id === '') {
    $roll.val('<Empty play_id>');
  } else {
    $roll.val(getRoll(serverSeed, clientSeed, play_id));
  }
}).keyup();
