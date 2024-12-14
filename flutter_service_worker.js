'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "961d4d64a6ccdfe5f50ed07fbb25a1d8",
"version.json": "9c0c3ede1cc32b6154ccc0883feb0d4c",
"logo_button.png": "b6509a7cb3a67465b6415f53e614017a",
"index.html": "5b62d6ebaf8cfdc0d30d40135c6e0b49",
"/": "5b62d6ebaf8cfdc0d30d40135c6e0b49",
"CNAME": "f051d41d23db80aff80afcf78e765d7c",
"main.dart.js": "1be0f4b7d9df56e83cd1606e96ba4168",
"404.html": "63147b8b43c65d0d3199e7070db71804",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6ed5778daea2d04391ce157e5bb00ce8",
".git/ORIG_HEAD": "59e011cfc56329f89ce6f4a7c3c4d866",
".git/config": "e04d4c7eab727fce60daaada29084886",
".git/objects/61/2ab2c3a70a61700fee86a99bf04695d4c7bb9f": "b18d556cd6f9b39b58c17ee585594fe4",
".git/objects/61/2ed0090080b9851afac85e663e985ee25b07dc": "9a714f07ab923fada4e0e3b32e950e5c",
".git/objects/95/22ccd1cb27ac016bad4f0f962bf84ec4eb3e11": "ee1d0c89c22281b3333b3dc6d4e51771",
".git/objects/95/966e28bb467e630342b330dfaed553697a9007": "b3ee8a264145f1412b38de82a29700d1",
".git/objects/59/ae7fc110ccd41d857150e9856a5d791bf8cb78": "f23680a0be7cccc9539fcf0f196bb73d",
".git/objects/92/e6a342aed2ad18c6e6b66951049a9ad0079e23": "52c5ce14a6d3d3100967b8f20c5a2128",
".git/objects/92/f5b672e6413132c1a8e24b08dc04420819c735": "4157598689f69ae2cbd5ec01908f5a69",
".git/objects/66/c36546ecaa9ffd6f7c25c6238d6710fdf625c1": "efd99c03f61ad3fd8f47b1451b02ea71",
".git/objects/3e/83ee511d6fb212a70820531054b1f663bfcc38": "520538cb823c61a2247a147d92c93ba5",
".git/objects/50/6bc7305ddff7345eb7dd59a0fe1692a8d945b6": "bc2c9f52f45b3260c9bcd1d8ae9481c7",
".git/objects/50/fd2c6732b565c96f6d5c994a9663ca769ca40f": "941c9c7d56c1bf14ea03fda3abffeaab",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/68/d294227cb12924ca3e42338cc3ca5ca35076b1": "8d2f42b847ca21dcf8af2e6e27fb4283",
".git/objects/57/c68e7d24369e35a13a1ec5e6913251995435d3": "9b6b532259070108e56b41f5a662a3c8",
".git/objects/3b/c140f876d369302db8cec5bf61609bee507111": "f29c912fa0f45b5a67053cb90d1bf2b4",
".git/objects/6f/85041b97638c1d9c3cf6f337ab68dcbb744e6e": "d8c78d95c923ef30a7aa1093031b8345",
".git/objects/6f/de50cd1c6cfebc95e554307b3583da5f6445f0": "af314b3bfa095635f3fd476c3f4eece2",
".git/objects/9b/5e9c26e4f8f5b377c79c986899630553aee809": "aab48de9867bb6626c9f7b1d2c7daab9",
".git/objects/6a/ca03c7f3cd318a067a331fef2d37d1969add9f": "9ed744cce8a2c77d4ec34b422ad05c4f",
".git/objects/32/f8e0101d3c1971cae85eede17c0cf272be48f5": "cf7674bf814b0da7599c7a26ee83872d",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/523c772ac395bee385458e1a28c67fb5b88727": "8802699ae66a0ae84afb4aa2e4698cef",
".git/objects/35/e128170251b4eb5610a597b13cda3ec14697dc": "c2a8edbdced603f9beffc15896ec84c1",
".git/objects/51/64871cb9834ac69af211f993b25f8c0ed5bb90": "e400e483ab91a3ee1c5e2409b5600bf2",
".git/objects/3d/04ceae23de07926722e56b2b42c1c45e8541f1": "059f0e9347681fe769eb6ba7aa3a2706",
".git/objects/3d/3da2c30e39d660f3d4141e2ba62fa301dbc64a": "8451a0fee0411495cb8c3390f3458f98",
".git/objects/58/f2a1b3b2222323714502de9726f17e9698e8d7": "8107f00cf7ef8b28e7492e48a78c4891",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/93/998c59c2b82cc1c75d802c7a5947a9d49228af": "65243c577797b7cefb2bdeb415ac0197",
".git/objects/93/a5eaa2635ec7e00c39f7e68d15bdb10ca9849f": "8dff245d72b9f390488484e64caae271",
".git/objects/94/c422428bfabf7e1067aa90f21deb22561b7b2b": "73cb239907b61569c34d6fdae0f7e545",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/0e/19fa0b8183cccce4ef73672d99ff8fb61da746": "92bc927caae95f56cf06184165210c71",
".git/objects/60/df8d8093e91fe6b26eb87a528fb510dc54c5c0": "a75c3134ed6373dc87eb710c7820982b",
".git/objects/34/a990c2c81264036dd95190b4b95cbad6c99585": "0764765f4ddb13f9132f38cff66fd316",
".git/objects/5f/666935002e6647510b8091c0a38aeaa5392e42": "41bf61a73ca4922982c894c3666742bd",
".git/objects/5f/9441c69fefef7ff8d43eb3d18c51ffd6a97d5e": "34f404159691470d3b8ac998ee690691",
".git/objects/5f/97bcd8a30a63ac1c6deebeb1b74e561d6b5f20": "7b639028d54dfca937265d72377f2c58",
".git/objects/33/f823afbda1cacd069d406d9a909d77b7738971": "336a6d3489ddd51db2b96255632669be",
".git/objects/33/d8dabaf5fba0c3ae6b3ef390f72bbeea6d3bf7": "386ae344f15fcc9ecd3f5c6e209e643a",
".git/objects/05/eeb72a59dcb626de2141d3b0326e126cf07bf7": "d451a420b83a58d412b62bcdc980fe53",
".git/objects/05/0898abb733fb298de6f8e663c5e098eceb99b8": "30100787ef5f7c5b515c61ad4ec5b3fd",
".git/objects/a4/bf0be7cea1ed86f353e710ca34350935d764cc": "3b0a12407b192d34e1b96780c997c439",
".git/objects/a4/562af07b4e42887f719b554482d635f73daca6": "85ac6b45ea0738cc4711e596d948db16",
".git/objects/a3/40486619eabb77d575fbf8ddd8b8c307e565e1": "6dafc945eadbd8f4bb9c319f88ad74dd",
".git/objects/b5/dd13d02f5435dae6028cb79611e240d6b253fa": "4cbf1ebfdbb0d48d25d185bcd0cd7b0f",
".git/objects/d9/91d4966b100c2e68be44a122d564b08f4390d2": "419eaf6620109b10e529e58a1d89fe75",
".git/objects/d9/3c3985eea581246140b08f1a442287b022f8a1": "14d525f6e35b336cb53946c545f378c3",
".git/objects/d9/d3169541326a9e43f6ddf0631e95a6cc07bc85": "02348a73b52bbde87e618f742db8692a",
".git/objects/ad/5d1fae65de5ba3764e762d7e51d3d05e9608af": "f72f70256da7505c6600817ce1168c14",
".git/objects/ad/59aec840544c7a51559a3b3a8ed66c779ffd75": "3e77a12ad7b94e8098190aafef1cd9ca",
".git/objects/ad/2e6f401ac3df19b1820d95a8689fecbba96d9c": "f3a99ea3c3a32f58b1a44b4ba71cbc75",
".git/objects/bb/ab3a798ca00c1cccd6fdaa3c573d774ae21b74": "e209aefb0dd255f0b63e70b6a387ceb5",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d0/60d1045130907136ee5ae4dc22cb62b32cd5aa": "2bf62dbefe30f9131161256caa303db2",
".git/objects/d0/a9b99881dedccfa0ff7cfdd958d8267d6c6b08": "cfedae0b3bfed7caf7157150bf988eb1",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/be/fd5041d8caacc6dd2ef389bae8ec8bdc8fdcaa": "f82482d4469336d13fd93e2cc05628ad",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/da/22505dc927abd4d3c126c4b372f48ce36b395a": "3ea41d8b68d358d18811b0c02f32ab88",
".git/objects/b4/5743a40b8788a050b706fddc7d09f5c1d49965": "abb4abe6b6bf7c5cff8d68d34e16e6fd",
".git/objects/b4/d573e5b9df745941014ec72f4ca141f990d9ce": "de6905e6cd6f92e20bb879bebd55959d",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/a2/0a55707e4fa1c9870074a6ef4f8ae501af736e": "4e43774ada913264d347df9403a2ef64",
".git/objects/a2/e45cbe5c88da8b0986284ec48882e77f311fed": "f15a33272be7d14db88b5c047d6af336",
".git/objects/a5/299a345953b53c4ccb66f5112f1bbc7326c742": "d00ef5d0b47ee152259228885ed48986",
".git/objects/bd/6d4c73fbd516a8458977f9e6a4a588f62320c7": "35d720a9e4418567eadbf0cc700c5667",
".git/objects/bd/4154e91cbc3083605b164f2ba9a33c6dc9ed4a": "4a51b30c29c248087afbd13ed5cafcd2",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/801cbe58bf547a37d8a39424ea3b7b3a4986e7": "32654739890f830612d6d535af5180dc",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/eaa5320a44926d837acaf9e00d975f33ac28a8": "82bd69ebeab2cbcf79e5a6292a71987c",
".git/objects/d8/28dfbf4f0bfbcdfd178aab9745fe15e9919b4a": "35c34821f2bfd416d09582d07162a9ce",
".git/objects/d8/a5040ca9188b91ff4aad62500bb994b33884c0": "c8d9d89e8ac1cc58fea5b33c42798245",
".git/objects/ab/dc471e9c4bc2e38bc658ef87b26cf44ed55403": "9a71132da3ba508afaf9428c766b89be",
".git/objects/f3/00c0877c2e210a9170d1ea46f60a4b87e64264": "59c2761fed88feb9780c3ed809bc8003",
".git/objects/f3/85ae31732a50f331e0f1425ecf1c96c9ef54f5": "c8b58591d2a7677353fc9d0fc09be42c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/9c59e4b071fdbb4b9f9a5849a2cfe2ba35bb01": "676a9c92d18a8c4160ce4f9551f7c756",
".git/objects/eb/b57cd4ffb5cf0503e6d8bd08cbe55210546845": "e797e93e1a28a81d6bbf831c8ce39a04",
".git/objects/c7/5828605c20f251b8918578691ffb678786adcf": "5018b853e02efdffc6c660f620dff4b1",
".git/objects/c0/c429b35585835b13507518134344116326cc7f": "94ff351d32e5391302115f3bb7d1f5a4",
".git/objects/c0/b6c107de4f6db83a7410a2642a7a04d2ae3480": "c0fd24b2494f0db94d9779a2c242635c",
".git/objects/ee/9086eb28fb076a16c0779c979c5794c2283b7a": "33297f91dd2a9d8665b44c01cdcbfe71",
".git/objects/ee/d6c891950fdee7a04d4fc6b967dc664e6cd1af": "f4c160103ee223a50a8b527b9326b3bb",
".git/objects/ee/187e9a370016f64fc632d17fcd9cdc90e52fb7": "e8b4c2e47e6336f69c881bfac395b751",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/c9/c68cf6454b7bc17ddb5337783f58c081a21aa8": "a2f16376efebb03d3e8bb57e3c2c45d4",
".git/objects/c9/e40d7afc42c6175bcdafd65cf5492f5a41cbf5": "cdbaa242160d71450d7574801d497ba2",
".git/objects/c9/06d1e44f5d8c87e18a8806bd2288488052eee2": "d47001937b0a78739e51c8a65d019092",
".git/objects/fc/e6228973b2f8cee05acd059cfaf45fc950c14c": "34475a6e2e63a52b782102c2fab5db08",
".git/objects/fd/3cdc563bee338d5968cb8e04141833279d918b": "9ea74b7f22d1af1fa227c64087df558f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/74c552ddcf2b6d39f130a72615f671e086f476": "b3c23116b626b1a996e3b576bd10a2b2",
".git/objects/f2/f7e77fe37670c46f241d37d13e04f44e7dd935": "ebcf0095260eb267cd86171ecf860d74",
".git/objects/f2/edd9f95109c30e68d9188e1ae2cdef1225e1ea": "65d75e4a0171d3547e64f13f9113f488",
".git/objects/f5/b56b29558a8d7282caadba228e455e8e4f7d1c": "8e45d12e925e40f8103444fdb405c9aa",
".git/objects/e3/b51c18f46fbf620729d6fb0ecfc44b950cd433": "458dd4c1017b139c4627d050a96547b5",
".git/objects/e3/6f99c1df1f9f0ede356fafbfe50ac8d2816403": "dac9ded78c470c44f0625971a7ed1b64",
".git/objects/e3/256302d4f9eb549ab0f6283dbe6aa4e45344e6": "35d5071aced4ec36afcb5263b0c512cb",
".git/objects/ca/dfc7d443c1b3a4a6529c61ad611b1ff92d9f7d": "1ecc3973cfdd0896f230427f41200ef6",
".git/objects/e4/3076bd72fc2897216e1abd37279562ab222981": "aa3843e9232a69290b1fb07eca4a08eb",
".git/objects/c6/4fa7834f47623e617908a329b6f16145780372": "651ad983947a8e64a6a08da66292f7c3",
".git/objects/c6/a3051efefa8aba0d36d3becc103d3907a0a852": "84cccd95e3d22482feee8c8709e45ff7",
".git/objects/ec/96da49d6e43d3ccc64b6dd3e6d11597ff3303d": "3fa8240e1c682683cb48f0bf9bcb39b2",
".git/objects/ec/db3750bd235c0e8947427579c1eb4aa2dbb74a": "de76b8c75fafe21af87e1487c80838cc",
".git/objects/ec/7e7ab3ade47664138f86d5fcb8155e03dd324d": "4503519bff92346c03bd4aaa47525f82",
".git/objects/20/ba35a3677f07b38005f620d1569602ee23ae2d": "d5b56f42298166f88ee096e67288523a",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/4b/eb0c75499e900a705704ec7a880fd6112ae648": "1eeb1e5af0a5b9e895a1b287e6cd0c7f",
".git/objects/11/0de85efbccd226ce39eb13df21b864b5f29b46": "db13f322c7ad00a0ca3ee4cbc1cf17a1",
".git/objects/11/3404247ac046eac46d79779778bc2c2df0fffa": "7187c0c271c5f7b30e0dd1c50147a430",
".git/objects/29/7afe11039e47a5623c66dcdd2a329285191a31": "c5c4363e8aa92194e70f9d8c7cfd398f",
".git/objects/7c/e697c8d32b635ad17a606991c9fcc80d081fee": "87683e16dbdb0b3843dfd92b6cd0ffcd",
".git/objects/7c/e0796a3e95da45a60e929479f8f913c504ef0c": "0467d76a0050ca3c96802ac73b6fb93b",
".git/objects/16/6cbc5a4162563a275c1f67d782b90c900fe82d": "c28ea61bd8ecddc75e54533570cbeb57",
".git/objects/16/09004ddce65d1bd7ba5e39737652813cd61f4a": "a348565a30c05fc70ee507ef7660170e",
".git/objects/42/452680c1785f31f2a6aaa9dd4e3bf759c366ae": "b4256cfac652456d0cdc56fac6287af2",
".git/objects/89/c9278d8baf42a2493f2b79f1b0dc03483cc8e3": "4386109a60a7d328a438edf3fa48485c",
".git/objects/89/64552592a14097c0a7bbfd99f794317cb873f0": "b58e2263fbecf7b22a598025c6b61145",
".git/objects/89/5b36439966dc46812f40afe77c2dcd2b401707": "e8dd2a444efa175116e52aabbc96131b",
".git/objects/45/b61bda6e422c6decb0566692f5cd9070579508": "a0e67ea842b3592fb75f9545ac3dc832",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/28137d76727ed4b84e3c621c343349ca4081da": "dd6bfbabaf6f899eca3ccae57d6bcddb",
".git/objects/80/e4419d7a177f6c984806e8b640797fc36c463d": "27728998b3187ff2d7e8eb03d2244a2f",
".git/objects/28/6d9513b6cd667917fa9cf7ea406b825ad9a1af": "0f80ce1f8b0c4ac3aaf4a3b2c9485686",
".git/objects/28/8f7c2e239af951a41eb720b089b34af09c54e1": "cbe8ee48e34fc9b0f560bd74a940e978",
".git/objects/17/43430fecc454cd0ed1403526e9d7831a71f7e9": "ada9f417e24d7b42c849e9dae7bc45a2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/f6be85d08e6a44b64cc69233967861d97d59f4": "24adbe06054c21cc32857aafdfebd8da",
".git/objects/19/1e3a98c57af44305f4aba46a4f68e7ff35015e": "2945b4ec9ee0e140ca53474fcaa77b1e",
".git/objects/19/8407522312c54a6842d50153ca98008a71c0b6": "e1cb147360031244dc3734edb5dba0e2",
".git/objects/26/03d910aa76471634b57b29d584eb26b6477a07": "fabbe89166c696e981959c156e087ee2",
".git/objects/21/fa81c976ab15a0721e1d99949a1f9abf39279b": "5ad44f4441869d0bdb3a8b9767497b41",
".git/objects/4d/b3a66e8fb293aa692cd161bebf94fc3f7ebbde": "13c44ee71b813e4afc946f47fcbe4e7e",
".git/objects/75/31481c78555dc3a0f2fe856ab94c8cfafdd2e5": "92f115bdeff9599e6a097e84a0aab59a",
".git/objects/81/4e951c61f6a23700ab85438edb6cbedcfdd4d3": "40ce6ec5949f2b68ea3e5bc90bd4e91b",
".git/objects/44/473787ec0dce6ae1e33790549fd0f510064471": "6a62e1e2833664617155d3a3db0f114c",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/2a/efd8917d49a7f71c8977a080e6bbbad480747e": "35e183541f458fc2101e3dc07567d2b0",
".git/objects/2f/906c6684e14103f5c7204e62396a2f3f9a1b6d": "7b5acecd385ae2c7d3e33e47dd7cd806",
".git/objects/43/c2c78b88175ab279fbd5ad452d06c579c59b96": "4e7232a093dc26ba1abf107977103bbc",
".git/objects/88/7ae6bb1a9a0b55e7c0cd7f1be1b3d43f7bed38": "421ad04e851b6a7da3d6798f76f7b110",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/38/8a10c91de340889ee96505ea3e26fcd412301b": "3149a8d9aea662a666a82c1ac2fc6e45",
".git/objects/38/4428aa3222fe8cd51e00933818e7e57b71dad5": "b1fa010609330d4714dbb0ef9565769a",
".git/objects/9a/e778b91a4f79895e46454393ec8f040009b8e2": "0967e35b8aa338be3bc920a9e3aea702",
".git/objects/9a/bb04c19100dbb43a7173fc772e9b66984b5266": "43351fafaecfc5dd1656d4ee389eed81",
".git/objects/36/4f5ca30ddabf3e675779ae6350b93cd3c782ae": "2fd0e25950cf48b15421781089bed345",
".git/objects/36/0828a8cbaade4cb8a1e8ffefd550b62e1f993e": "19a3bf223f3fda0284d0b298db2b3f0b",
".git/objects/36/6be2e63e2743af880b3998d098d7994bc954df": "846f1788de28a5ce91e1c96adfde7658",
".git/objects/36/b1a9da487fe9dff23f91dc43338179534b955b": "fc50efcc8e27b49d78e62c01498a5923",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/09/3b5bbf9529c1e92092fa08ebd6daa06135e33b": "cd565da629ca3e009689dcbea82e9dd5",
".git/objects/5d/b2d308bcf0c649efb13e1f013866ab1bb7191e": "9b02fc03fe8c354e4d5ac5529e2b106b",
".git/objects/31/01ee02f897af487b3d14f97df35e36666daccc": "9fc75d75c9dbc3f9c75ff079cab47402",
".git/objects/31/9b0db0ed4c21f721868da1ee263cb51a849a3a": "43fa64e29cd960fd0cbac3c99846cf41",
".git/objects/31/43772a4bfe6bed1f05dc0c03f048636af1f745": "f7579b4f08f7c1980b71f4b1ad8b7400",
".git/objects/31/24cc03c75ea350c5e73d1d74474e99862a9152": "4c3cbe70aca505fc59e340f85f948df0",
".git/objects/65/8b4d5d8768b9998a36c64197c20b2391a634b1": "55184864bf09668fa09a82adf693a300",
".git/objects/62/464c12873365490f3a7f2bd223ff786dfbade9": "a0645c01cc7ebbbdb807fc6f5ecd8ed0",
".git/objects/62/2bc870f56484bdff4d9f0c8937113d094a19fc": "db41cb32a3136442010c907b2a4b45ef",
".git/objects/62/19a86c67dd38836ae7bc56a60004325a937dfa": "76d4e79b049620c1e43e5331327198e1",
".git/objects/96/685ae771285662f61b6b3305e2646655f24d26": "0381b37986c506779bc5c61a264acd69",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/54/4fde36438a630b8997fe341ef7a75daa490f38": "7deb70ee55a8a7164d336ab90df7791c",
".git/objects/98/a7e461c65c7860e93f422c9a0135a5f0e93173": "7d1d29f3b1e77a5ba71b1e0f196725f0",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/1ff67f878357220297a88f9cf947bd91c81969": "42247a2f6978de17037b7dc48a317bf9",
".git/objects/98/7b7c10ed6e0045289d62e5df396a6a1de7da1e": "4b7c9d14625b228a82ce0b6ef9964c3b",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/38d3a20a1d919b540d82bb57e634ac26420121": "4103a6b2453f4514fb668237fa3bd296",
".git/objects/53/8f91ff8ed9ea090c27de73bfe7af5abc3275d5": "6a9b33dca6e4576cc4f2b20e0c299963",
".git/objects/3f/a02750df7de2ae68258b239a90bbdc7b25a14d": "44e78fbcad71576e035f63a337924f3a",
".git/objects/3f/41f7a34ff6264fd036c50f885cb1980f5e1bb7": "c0cb40fc5df45f0bb3cc0d647e317783",
".git/objects/3f/0555a4c35b435ad984b6b1bdd1845f9df0fd99": "e14953c71943c43eafe6a416c834aa11",
".git/objects/3f/0702b03e1c87a6754db29a77f4e3347cee3ccc": "ac896ed5ea1557df23d0d4dfe4eb356a",
".git/objects/30/55090b3f08293f4506b8798e949f60192be2c9": "55198d1d2668cf7c57b3e2e5ee1bdb1f",
".git/objects/08/089f230d64372970224d8482ed4a5f5bec1ba3": "221c9963aa96d118d5d06dfa8ca4d044",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/6d/d1ef680bc090b4342290484f24b523a044bc69": "1e0e9a66176758265bd22d8a16bab2cc",
".git/objects/6d/106dc02b3faa52279d29f3fa840e87b41836a2": "c13b7df16da566cb1cdbaf4b4940fd6d",
".git/objects/6d/19ad8ace633d406009134d6a86cc74a2be968a": "8d34fcd0ac96c677e364dfdac110d344",
".git/objects/01/834bfdf652521f0670fc6affc0c9d600ce3f44": "ffe8753d0a31f762d518ae8ad95e4d14",
".git/objects/6c/ac7ac62db5675a21187c763eac8fc49247a7db": "1358d51285517bf7034ffdd73d5e932e",
".git/objects/39/bf147520eace6cee6923b04105a276dff410de": "146ee21eb9b61d231885d1e871d06e09",
".git/objects/99/b62f7101f4f2f44099fda255668a8ea1e528a5": "c776a0314b8ac8b211204fbd8a20452e",
".git/objects/52/8eef8b088a62f63933ebfb5a8a9fc1be81493c": "0323db691489eaa57c2cee8ab3797b8e",
".git/objects/52/4e6a297cf5f4d8859dc168042fd36faee3a0f7": "7c581a134997bb536d942ca106ac9466",
".git/objects/52/0c94419732c4d4a8e0b77b7d3e225ba03e6e30": "af91675e9c303542bb9d35be2c452227",
".git/objects/55/8784253329e0048fd142dca943f288db33a8bb": "dd2b3e023c78e2a0c7474126f2833039",
".git/objects/55/7fda34496c87ec4e9ec171d4725d2098844e1c": "cfcacf621939c6591e1caaeb296e2b46",
".git/objects/97/4d710a30a60c3e53b2261e8bb71060eba72504": "2ad6cf4a8d30bae80f33a4833037fc02",
".git/objects/0f/76a5677eb2823ad087dfc8f38ec52ddede2e7d": "9d215ad0c35cb483bec7d0bf22774933",
".git/objects/0f/19786399ff70a8545de7ad2cf904621c7bac82": "3b72255ae608aaee688c81340c7630a9",
".git/objects/0f/fe0856b13167c9838323a8da8d27e1b65ab383": "ac99f633b0ea81d29b48a472b5349ea8",
".git/objects/0a/9c5f7ef8b33f9948a7df59b5b0d17f3aefdf04": "53db4199759e13ed9d578d331d367aa5",
".git/objects/0a/0ff837311fe0fb4ccd0e157216bc9cac8b2012": "548ebe3175a9878319b0d3526005bea2",
".git/objects/0a/88ceb86b8bb7e98245b97fe7955d56664dea0f": "d5c1e85dffaf45d8474941be3e211f5e",
".git/objects/0a/0170c8052a199fd59f54706cef515cb89c5497": "41a2eca218e39a3ef73696cfb2aa6258",
".git/objects/90/504e4767c37aee8a56aa06fbc870694ec57fa5": "49b9790c27571eb26ce6ab8d71027ad6",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/bf/84eebee69a73f4c8286e178d943396eaed4476": "b31be33e45486c8d3c0751976aa4c3cc",
".git/objects/bf/df81c89822aa2ab563c84ff3a69ffbfa53a645": "2c84026b91d0435512cc15fc137c2ac5",
".git/objects/d3/d87a98fe916b5ae3cb4e3fffd3ca8a78d0a6d8": "5f86d8c754cf4ddd7dac9741fe9bd0e5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/7c80ff8724a9421cca1ed98a1e722cc2d536a1": "602acd6ab89dc9fe676a0dff599d689d",
".git/objects/d4/a30e151c46b915f95cdf46754535422d6654ba": "ab750d6c9ff5a37be786b13ba54ebbeb",
".git/objects/d4/4a4417b6b61c74c6a75312e42d20f37c8a0f04": "dc008415477d649c3d1073152d00df92",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/3da28ede62a7a758d573cf26fd4fa6495c2ebc": "6b33e8273a45e8214c614d8097e93dbe",
".git/objects/a0/164654ba9f015ebbc4802a8ff01cb02b1b81b9": "d94549cc7afd0e5d8e5939a474e21f7c",
".git/objects/a0/188178e774771a110397cc3b88676eebea71f3": "c54ef87a6a1df5d9d7504bac8fecebc6",
".git/objects/b8/b966ca0831c4d5b036e17cf99cb472db3ce6f2": "e5660974db46d533e887752347e197af",
".git/objects/b8/0283732c5b66645c729eb018b1563cef2b837c": "d89cbc7e7dedb198604049c92004187d",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/32bf792026186f9870713f779c05254888b8b5": "5b5f405c4622f34f8074e55fb0498f4e",
".git/objects/dd/b20e3377f37844d8ee5cf3a838f6a9121bffd2": "7b7ba694f15e66b75105b553d2efa123",
".git/objects/dd/05895a4f6b8f67ef60b305fe92e016c85ee9c1": "3e685d14d485a7534bd022f8c6d50c9f",
".git/objects/a9/b8bd4b760ddf7f16e19bfdbc44bade1729cb25": "355b03464fcba5cb2aeb595e750f3a67",
".git/objects/a9/684da2c1206e2a6c78d20f8baba96255c88c20": "85a56b80e901965e625ecf1ee924adae",
".git/objects/d2/b22d2070d6dc0556025a0bf3842a7b3b0e1306": "4322b21885d9ab3e1670b64c6b327814",
".git/objects/aa/ec4c7ed9fa47205bfb31f50a136f0873d6306e": "41085d744965f1a456a78128825921e9",
".git/objects/b7/1385c92e03e258f162536d8dff3722dcd32cbd": "12f6e82121b3f068cac86dbb5f212ca3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/2d9c795b917bae8bc996c5311ff426e9d8838d": "f75ec444493de5f8e315560be773e565",
".git/objects/de/9da4cb1c4291cfdafcbcc6620c6ccfc8047854": "7c9a269409c0654aaa7255873ea1b90d",
".git/objects/de/52e8135338b0cb9a90a6c989babc8c990a57da": "99f20bdce64644ad3b704c110ba4c837",
".git/objects/de/303631e2979873a38f341672af76d83f446f9b": "f31d9f697648438106a68d450ccc8d02",
".git/objects/b0/ec0254401f7732d52ff519ffd24a35e24f5dc5": "1c4a1156ff45a604aebfa94931f7e2b4",
".git/objects/b0/ba6b4f8fae3ecc7e1cc409b68ca02eb9014ee0": "1e78f983af455d0313518932ea61d2e0",
".git/objects/a6/961ce9b4c919bf7388d37f9031ddd08e731e26": "b35bb44439f4b3f660c976324f2fb833",
".git/objects/a6/76c86a453aba52e26586b42dba8c1e983cc99e": "1267d563c2c37ef3c61fd1639534c131",
".git/objects/a6/f9a922ad48e6d5cfb12124d164d0b34d19f79c": "204996339e3bbe6868352a42d3fd371c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3a61fc464ca1657e15c2d60daecfa6a29adf91": "f177ae8e0b5113efd6afd54e87a9d4a0",
".git/objects/b9/6b9f72c60fcc553764555658a5952e51fe117a": "c37f5cd444d4baf3131325858d8f7e50",
".git/objects/a1/c9ce0430a7d0b3c5f826a5b1d57f30417ba21a": "0bc2170e5b031b4fad97d5c1d3a14002",
".git/objects/ef/4a81af7efd7c7ef8999d96f1981aa4186d7dbd": "eb662ed873167972409673723f726d02",
".git/objects/ef/2bdb599e933389530e00ae3983acde10648976": "f3a3593c1161f71a85352693b624630a",
".git/objects/ef/8518d9c4d4235082332eb3a7ea2c72b7b8976e": "beaedb50eeb6d9e091275d8ad39fa0aa",
".git/objects/ef/098d7ebaa0f92a54707676c58a12743632582c": "3bc1625966f37ada7074a7f7042982f9",
".git/objects/c3/7ce80f8aef6f7ce06b74939b1b3b698fc9ae97": "4b307008d1d00eced281ab3a4c804f8c",
".git/objects/c4/8a11d6f6918289ac0e5f3a2441c3aa120f44eb": "a0ea993b8b641feedf32122b03d65fe5",
".git/objects/e1/bc6ace9e103399389142385d9f6ee77a989188": "0958b1872f570949f7914ddcb9883430",
".git/objects/cd/a41aa75d47da85e6f35fdd6c4b1cdb95ebcf1f": "f37e29052226f85e72879225302c4a7e",
".git/objects/cc/0f57edf78bffc4aabc0df76eaa986359fa69fe": "fdc1fa5312b3737c82ab368581d9be28",
".git/objects/cc/7e50ba6bc9bf05b1cc78412e35eec3f2b56380": "c7414a6eeb1b6757c2637273d10dfd48",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f9/5094c06c52fbb7b9d6cfdd231265630188a2a8": "af059d1f7bf3e78918aab43e0147bef9",
".git/objects/f9/09eae5fb00424f05b6ba7d6d8b7d0217fe6805": "171017ee9a49445868371de555f25687",
".git/objects/f0/93aa0f8950edf4925c771b1555d700376c7d4a": "e5b22b2582f908daad37e14c8b2b68f6",
".git/objects/f7/42645deabbd9f410e29f139f1384a9ee173ad9": "58ec5af9a3e2be591f9897bd7be9812b",
".git/objects/fa/0ae44a4fa9ae6bf096e6de006a25c3f82437db": "c3fac38e118d1b711f93383ab0dfdbc1",
".git/objects/c5/4e74cdd657e690750a704ccbbafc52505a2a2c": "288cf2ef14d9e8a0e2108fe4a53664fa",
".git/objects/c2/6081e51f8b31ea60cbeec1372fc04614e43059": "e02a6cdd0e3ea0edc6576dcd6f9882ca",
".git/objects/c2/8e560e678ab1aba103ce0c22585af4c2d16514": "805fc3f9f9380ac2467da26502251795",
".git/objects/c2/76450630759611f712b8dc23b57ff5031438b9": "21663c3adc69587656c6470823d6f6f4",
".git/objects/c2/e022d8d7770f272d94d0db8b683ab9089ff25d": "ac60dfc027f35006feff90b21fb77ca3",
".git/objects/e9/0e82f4aec1db63a205f79709e9f31576ed6f1f": "e7ad3868e6db5ec0c817d5b1f6230187",
".git/objects/e9/96f02ff10a9f43f45bc59497ce31c08635265c": "4fd7cb9e44ddf05f06c0787a8e8d1e80",
".git/objects/f1/2cbd78a113978228b96d9dba1f56914f38737e": "008c58106f54ea7721ab3a5ece9aedc3",
".git/objects/e7/63578282761fb39f1316cd3bb3c471e0841538": "937dfdc31ea476721b978ed8504de948",
".git/objects/cb/9aba3b969993d3e67a120cdbc63f1e54eb5100": "b22d76d49654e794621c77ebb25e8764",
".git/objects/cb/026b08492a6f0428f948ee4259bf9704f847bb": "331c81b652648d4e8c6f58438d1d0b8b",
".git/objects/ce/0915366fb73a41f2fa22b51ba08e12fef231b0": "1a2ec432ce80f4e3c730aaaa384e79f2",
".git/objects/46/a3b4b9a646dfe886aaf08017015c2d99ba5a2c": "0c203f1cba0ba01e5893f1b9a114ec29",
".git/objects/46/20c9ab40f66fec55661e074e4f10e37a4f65a6": "d4be059acedd28292b4e1ecfce384dc6",
".git/objects/2c/3ccccab1f99e698ac25c0eef94fccb11da48e2": "02fc7b86a6ef8fe82e7734ce8b838403",
".git/objects/2c/db57d2e9b798476a23ab86d5f4ac0efaa5ce67": "398a5df58ed087e4e8ec487c91c6fa9c",
".git/objects/79/8be7b076d27c466dbfe0c031d036b4c99a03fe": "f9718fd288b4173f35f7a7cd263c5629",
".git/objects/79/da7edb89f35c7a04c7de7e3f1c38dedd6ad0e9": "fde7a506709649c73eae408f08c6ded8",
".git/objects/79/3341ae4b4ce84db7a257bb6ce3e7bdf1f041b5": "0b16508faa8efe5fb47b7cb46b6f316f",
".git/objects/41/d6ae429b3912ea9cf051d5e009111c11bf90ef": "fb27c8e6674c85b0cf5d2989a0dad5a7",
".git/objects/83/0cf39dca879000e37826033025f4dae1e4c0c4": "d18e2afc6a38872e446586835e40276d",
".git/objects/1b/fd41a107f1ee6e9d901429b3d0abb6ad24450c": "324b079b5806121699921e135cf5acdd",
".git/objects/1b/dd7295da7f470b7fbe56fd77c7ed9591562396": "90f6707f34b9dde5e6a286c99e692d22",
".git/objects/1b/6a6750b6a1e71d9caa47aa27064717df102154": "466ea016523f84d85d2ba3a37444b011",
".git/objects/77/13b90a1a564168a072653990ec3f61027085ca": "bd2ba0efd62e0e576fbe09741f12e4ac",
".git/objects/77/125e6b206e36a6ab667f0a5111c80f975f5b70": "b0641e86e2a77a21eb4b26b22d468701",
".git/objects/48/910060d1a8570e880776db811cc9463c281263": "c0870ae311fa11e4fe1cfbfd25b5ef1f",
".git/objects/70/695849a891753d68188bbf63698f297ea6d7c1": "1666c401b6d30f9bfc4a7dbda29f088d",
".git/objects/70/2fab08e56b17c4dd3176cea4a9814689a507f6": "011a41198eee9d8c2b8ebe7826b375f2",
".git/objects/1e/3eabd60a743997d147e1db5645bff39a054d5c": "ebdd31567c46d78e4dcb7faed9af3ba9",
".git/objects/84/9627bcbf2e42ccde84548176d3c743cb19d6b5": "fb605faadd178705030d2799ef79f6a9",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4a/79f6a0e1e536bf01961f22315bc8228d752eb7": "453e4b23fb7cd80888cdd46e74ab774c",
".git/objects/24/21a7f3f36bd209443d24ea52253b9773ea642e": "09c06d070be0ab4f0fa7541b1b3c00e7",
".git/objects/4f/1a6552be4c4dd8c88818507da8b7c914ff2748": "352e67d32c8f7220d47a42b209ba45ef",
".git/objects/4f/04410fda3a2ad4b4c37a31bec060bea800f7d1": "d7af577f5a89507f60d29eca6d2bedf0",
".git/objects/8d/857cdfc7229ee61d6c59a9e162bd2a400ab9e4": "bf77454ad47a6c1995f2c78f7bdb0a5d",
".git/objects/12/b14276b46522b167708eff27cc62e606ff1bdc": "60358a40c95d0acd75495a7f23b1ae71",
".git/objects/85/52b0ed4e18c942d6ad1d3dd1e4428a692a7a4b": "5a50ac0ec95d2481bcb5b5df31114a90",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/98781003b18c5df983949f6bd1bb6a8ab6b5fb": "2fa46bace50c2ae9f4b8677e4a4f0fd4",
".git/objects/71/3e6f53d0474674956dba1f4478824dc710bf11": "3acc64eb3d101b6a177feb43714695e9",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/7494e06cce911166e3db8e5d96895d5481e1ac": "5b6a491a53c574e006bf3cd9624f2ea0",
".git/objects/76/5f77139985613c1ed016ab7f6ee4f6a85ab63f": "50fd3b03af8ae29d98c1ba07c278e5c7",
".git/objects/76/3cde6de3f564e22960e5ad4d0bb38f3366d31a": "08d83f17a892af9aa53d9c4f36b64bb9",
".git/objects/76/64c35cb03384788dea693659adb598f50a2e7b": "cc0543b9105d8886d0d860ef735ed94c",
".git/objects/76/ed9cc1f2b766ca93cefdfcbb5482e65ee06fb6": "46869e4f1ad0ead3d5484c82f3ed6ae0",
".git/objects/82/ba045b80b59bc41a4a4377ac3e6c96e1e1a42f": "0eed9eb5023767a2ae208441627a1af4",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/40/5446b7c92bf88aa6965c44eae39eef813442bd": "97b6b1673bc9d8c5d03ed82b079eba5d",
".git/objects/40/fec9c536b7afef4a9fca9ae112a6bf724244cf": "fb1343b1ea82e8388222f7c8a85b5198",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/2b/2816fdc708c62ae21bb9fe457c291fde010ab5": "45cbda1bcb7ec7dc3261d1e3700bbeb6",
".git/objects/47/a5b1f1c267dae531c638244dd9248488cbd80f": "67f08a05d37a72f0e7f38496a290a696",
".git/objects/78/c1189a5683f01f4d3553181546b54ad36b3d20": "9a2594a792b5ee17fe3cc1d4ac7e629d",
".git/objects/13/931562988d047c94dab983fdb1165426ec8a51": "bae98650fb77130c17a9544e39e8d417",
".git/objects/7a/175fa462a6bd7f9dca4ada386be72359627191": "5ef22c18b854c143ab9348d1cf4ef33e",
".git/objects/22/19c0b7970298d6d514b2caca9df2c1e7790a22": "afbd073118f0108c6a1dc761242b919d",
".git/objects/22/e6830737d5132cd600eaf7b7692f1ed0768b7a": "4684ef4197c620d8186f9c7da164c16d",
".git/objects/22/2f4e0d95710980d365b59ace6f5b4ad204ce9a": "8ce10817691da5c1b17944e34416601f",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/091dafc009dcd466da5b348db2433f706ff199": "dd56922cdb49ed0c4878307d5d392f24",
".git/objects/25/3096de747ea4935f326c1fac8bbca5a5301a1f": "4c5c85c0083c52c982592897e1dc0a73",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cc2942fa9063f7d9ebce0ff10b46b6e4",
".git/logs/refs/heads/master": "cc2942fa9063f7d9ebce0ff10b46b6e4",
".git/logs/refs/remotes/origin/master": "de795a00329ae3c4804351733142cf19",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "eff6c3302b487c261c67aba6fd8e29ec",
".git/refs/remotes/origin/master": "eff6c3302b487c261c67aba6fd8e29ec",
".git/index": "1a1e243ff9b5e92ba6fbcbdbfe983d62",
".git/COMMIT_EDITMSG": "6d49b8643a2965ebe70a2750d731d35b",
".git/FETCH_HEAD": "d4e07574377e9625a1db806f90907458",
"assets/AssetManifest.json": "b350ca75b33015144fcdc8229977c443",
"assets/NOTICES": "9a58fb8211a0624551cd48b92e7e2af7",
"assets/FontManifest.json": "d2e2a6a375fdcb9e3073ea7f7e0cf992",
"assets/AssetManifest.bin.json": "b238db3e4e29eb70b22721fdcb420dcc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f8ee68f7d007c2a5f2a71c80ac334230",
"assets/fonts/MaterialIcons-Regular.otf": "2981505e95e68ef818991bac68487a50",
"assets/assets/images/beta_banner.png": "d836076674e448f63a05c9b170291649",
"assets/assets/images/ok_logo_button.gif": "99dcf1ee308fd6c2281fefeb8ace52e4",
"assets/assets/images/logo_button.png": "b6509a7cb3a67465b6415f53e614017a",
"assets/assets/images/ok_button.png": "7ccc3edd8dd7ec51e0a1d17a1d0d9db1",
"assets/assets/images/background.png": "a42cb787997a63f4fa42b9dd4a297113",
"assets/assets/images/from_here.png": "18f1cce5ffb8b97380afb9da010918ba",
"assets/assets/images/beta_icon.jpeg": "0020c8a4ecc1840e833ccd65429304af",
"assets/assets/images/top_bg.png": "e09d68f80844decbb936063a31eaff01",
"assets/assets/fonts/Paperlogy-5Medium.ttf": "30a942b93f5a6ecf2b27b787f840279f",
"assets/assets/fonts/SpoqaHanSansNeo-Medium.otf": "c7160a32d3d50ac705392a5f50cc96dd",
"assets/assets/fonts/Paperlogy-6SemiBold.ttf": "140bcc17b6275d62a4614fcc10043131",
"assets/assets/fonts/BMJUA.otf": "7592a08778fd0fc3b37b052386aac91a",
"assets/assets/fonts/SpoqaHanSansNeo-Regular.otf": "d66ff1769f2e52a90fd58c0e307094e7",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
