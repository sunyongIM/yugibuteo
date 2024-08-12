'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "220ccf0007fd5f2ebe8dc9e0ed681699",
"version.json": "9c0c3ede1cc32b6154ccc0883feb0d4c",
"logo_button.png": "b6509a7cb3a67465b6415f53e614017a",
"index.html": "b5457a34b119b2a2b664dee8401ddbec",
"/": "b5457a34b119b2a2b664dee8401ddbec",
"CNAME": "f051d41d23db80aff80afcf78e765d7c",
"main.dart.js": "9211491976824bab1c36f0bdfd7e3850",
"404.html": "63147b8b43c65d0d3199e7070db71804",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6ed5778daea2d04391ce157e5bb00ce8",
".git/ORIG_HEAD": "59e011cfc56329f89ce6f4a7c3c4d866",
".git/config": "e04d4c7eab727fce60daaada29084886",
".git/objects/61/2ab2c3a70a61700fee86a99bf04695d4c7bb9f": "b18d556cd6f9b39b58c17ee585594fe4",
".git/objects/95/22ccd1cb27ac016bad4f0f962bf84ec4eb3e11": "ee1d0c89c22281b3333b3dc6d4e51771",
".git/objects/59/ae7fc110ccd41d857150e9856a5d791bf8cb78": "f23680a0be7cccc9539fcf0f196bb73d",
".git/objects/92/f5b672e6413132c1a8e24b08dc04420819c735": "4157598689f69ae2cbd5ec01908f5a69",
".git/objects/66/c36546ecaa9ffd6f7c25c6238d6710fdf625c1": "efd99c03f61ad3fd8f47b1451b02ea71",
".git/objects/50/6bc7305ddff7345eb7dd59a0fe1692a8d945b6": "bc2c9f52f45b3260c9bcd1d8ae9481c7",
".git/objects/50/fd2c6732b565c96f6d5c994a9663ca769ca40f": "941c9c7d56c1bf14ea03fda3abffeaab",
".git/objects/68/d294227cb12924ca3e42338cc3ca5ca35076b1": "8d2f42b847ca21dcf8af2e6e27fb4283",
".git/objects/3b/c140f876d369302db8cec5bf61609bee507111": "f29c912fa0f45b5a67053cb90d1bf2b4",
".git/objects/6f/de50cd1c6cfebc95e554307b3583da5f6445f0": "af314b3bfa095635f3fd476c3f4eece2",
".git/objects/32/f8e0101d3c1971cae85eede17c0cf272be48f5": "cf7674bf814b0da7599c7a26ee83872d",
".git/objects/35/e128170251b4eb5610a597b13cda3ec14697dc": "c2a8edbdced603f9beffc15896ec84c1",
".git/objects/58/f2a1b3b2222323714502de9726f17e9698e8d7": "8107f00cf7ef8b28e7492e48a78c4891",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/93/a5eaa2635ec7e00c39f7e68d15bdb10ca9849f": "8dff245d72b9f390488484e64caae271",
".git/objects/94/c422428bfabf7e1067aa90f21deb22561b7b2b": "73cb239907b61569c34d6fdae0f7e545",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/0e/19fa0b8183cccce4ef73672d99ff8fb61da746": "92bc927caae95f56cf06184165210c71",
".git/objects/05/eeb72a59dcb626de2141d3b0326e126cf07bf7": "d451a420b83a58d412b62bcdc980fe53",
".git/objects/05/0898abb733fb298de6f8e663c5e098eceb99b8": "30100787ef5f7c5b515c61ad4ec5b3fd",
".git/objects/a4/bf0be7cea1ed86f353e710ca34350935d764cc": "3b0a12407b192d34e1b96780c997c439",
".git/objects/a4/562af07b4e42887f719b554482d635f73daca6": "85ac6b45ea0738cc4711e596d948db16",
".git/objects/d9/91d4966b100c2e68be44a122d564b08f4390d2": "419eaf6620109b10e529e58a1d89fe75",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d0/a9b99881dedccfa0ff7cfdd958d8267d6c6b08": "cfedae0b3bfed7caf7157150bf988eb1",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/b4/5743a40b8788a050b706fddc7d09f5c1d49965": "abb4abe6b6bf7c5cff8d68d34e16e6fd",
".git/objects/b4/d573e5b9df745941014ec72f4ca141f990d9ce": "de6905e6cd6f92e20bb879bebd55959d",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/a2/0a55707e4fa1c9870074a6ef4f8ae501af736e": "4e43774ada913264d347df9403a2ef64",
".git/objects/a5/299a345953b53c4ccb66f5112f1bbc7326c742": "d00ef5d0b47ee152259228885ed48986",
".git/objects/bd/6d4c73fbd516a8458977f9e6a4a588f62320c7": "35d720a9e4418567eadbf0cc700c5667",
".git/objects/bd/4154e91cbc3083605b164f2ba9a33c6dc9ed4a": "4a51b30c29c248087afbd13ed5cafcd2",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/801cbe58bf547a37d8a39424ea3b7b3a4986e7": "32654739890f830612d6d535af5180dc",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/28dfbf4f0bfbcdfd178aab9745fe15e9919b4a": "35c34821f2bfd416d09582d07162a9ce",
".git/objects/d8/a5040ca9188b91ff4aad62500bb994b33884c0": "c8d9d89e8ac1cc58fea5b33c42798245",
".git/objects/ab/dc471e9c4bc2e38bc658ef87b26cf44ed55403": "9a71132da3ba508afaf9428c766b89be",
".git/objects/f3/00c0877c2e210a9170d1ea46f60a4b87e64264": "59c2761fed88feb9780c3ed809bc8003",
".git/objects/f3/85ae31732a50f331e0f1425ecf1c96c9ef54f5": "c8b58591d2a7677353fc9d0fc09be42c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/9c59e4b071fdbb4b9f9a5849a2cfe2ba35bb01": "676a9c92d18a8c4160ce4f9551f7c756",
".git/objects/eb/b57cd4ffb5cf0503e6d8bd08cbe55210546845": "e797e93e1a28a81d6bbf831c8ce39a04",
".git/objects/c0/b6c107de4f6db83a7410a2642a7a04d2ae3480": "c0fd24b2494f0db94d9779a2c242635c",
".git/objects/ee/d6c891950fdee7a04d4fc6b967dc664e6cd1af": "f4c160103ee223a50a8b527b9326b3bb",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/c9/e40d7afc42c6175bcdafd65cf5492f5a41cbf5": "cdbaa242160d71450d7574801d497ba2",
".git/objects/fd/3cdc563bee338d5968cb8e04141833279d918b": "9ea74b7f22d1af1fa227c64087df558f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/74c552ddcf2b6d39f130a72615f671e086f476": "b3c23116b626b1a996e3b576bd10a2b2",
".git/objects/f2/f7e77fe37670c46f241d37d13e04f44e7dd935": "ebcf0095260eb267cd86171ecf860d74",
".git/objects/f5/b56b29558a8d7282caadba228e455e8e4f7d1c": "8e45d12e925e40f8103444fdb405c9aa",
".git/objects/e3/6f99c1df1f9f0ede356fafbfe50ac8d2816403": "dac9ded78c470c44f0625971a7ed1b64",
".git/objects/e3/256302d4f9eb549ab0f6283dbe6aa4e45344e6": "35d5071aced4ec36afcb5263b0c512cb",
".git/objects/ca/dfc7d443c1b3a4a6529c61ad611b1ff92d9f7d": "1ecc3973cfdd0896f230427f41200ef6",
".git/objects/c6/4fa7834f47623e617908a329b6f16145780372": "651ad983947a8e64a6a08da66292f7c3",
".git/objects/ec/96da49d6e43d3ccc64b6dd3e6d11597ff3303d": "3fa8240e1c682683cb48f0bf9bcb39b2",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/11/0de85efbccd226ce39eb13df21b864b5f29b46": "db13f322c7ad00a0ca3ee4cbc1cf17a1",
".git/objects/11/3404247ac046eac46d79779778bc2c2df0fffa": "7187c0c271c5f7b30e0dd1c50147a430",
".git/objects/16/6cbc5a4162563a275c1f67d782b90c900fe82d": "c28ea61bd8ecddc75e54533570cbeb57",
".git/objects/16/09004ddce65d1bd7ba5e39737652813cd61f4a": "a348565a30c05fc70ee507ef7660170e",
".git/objects/42/452680c1785f31f2a6aaa9dd4e3bf759c366ae": "b4256cfac652456d0cdc56fac6287af2",
".git/objects/89/64552592a14097c0a7bbfd99f794317cb873f0": "b58e2263fbecf7b22a598025c6b61145",
".git/objects/89/5b36439966dc46812f40afe77c2dcd2b401707": "e8dd2a444efa175116e52aabbc96131b",
".git/objects/73/28137d76727ed4b84e3c621c343349ca4081da": "dd6bfbabaf6f899eca3ccae57d6bcddb",
".git/objects/80/e4419d7a177f6c984806e8b640797fc36c463d": "27728998b3187ff2d7e8eb03d2244a2f",
".git/objects/28/8f7c2e239af951a41eb720b089b34af09c54e1": "cbe8ee48e34fc9b0f560bd74a940e978",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/f6be85d08e6a44b64cc69233967861d97d59f4": "24adbe06054c21cc32857aafdfebd8da",
".git/objects/26/03d910aa76471634b57b29d584eb26b6477a07": "fabbe89166c696e981959c156e087ee2",
".git/objects/81/4e951c61f6a23700ab85438edb6cbedcfdd4d3": "40ce6ec5949f2b68ea3e5bc90bd4e91b",
".git/objects/44/473787ec0dce6ae1e33790549fd0f510064471": "6a62e1e2833664617155d3a3db0f114c",
".git/objects/2a/efd8917d49a7f71c8977a080e6bbbad480747e": "35e183541f458fc2101e3dc07567d2b0",
".git/objects/2f/906c6684e14103f5c7204e62396a2f3f9a1b6d": "7b5acecd385ae2c7d3e33e47dd7cd806",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/8a10c91de340889ee96505ea3e26fcd412301b": "3149a8d9aea662a666a82c1ac2fc6e45",
".git/objects/9a/e778b91a4f79895e46454393ec8f040009b8e2": "0967e35b8aa338be3bc920a9e3aea702",
".git/objects/9a/bb04c19100dbb43a7173fc772e9b66984b5266": "43351fafaecfc5dd1656d4ee389eed81",
".git/objects/36/0828a8cbaade4cb8a1e8ffefd550b62e1f993e": "19a3bf223f3fda0284d0b298db2b3f0b",
".git/objects/36/6be2e63e2743af880b3998d098d7994bc954df": "846f1788de28a5ce91e1c96adfde7658",
".git/objects/36/b1a9da487fe9dff23f91dc43338179534b955b": "fc50efcc8e27b49d78e62c01498a5923",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/09/3b5bbf9529c1e92092fa08ebd6daa06135e33b": "cd565da629ca3e009689dcbea82e9dd5",
".git/objects/31/01ee02f897af487b3d14f97df35e36666daccc": "9fc75d75c9dbc3f9c75ff079cab47402",
".git/objects/31/9b0db0ed4c21f721868da1ee263cb51a849a3a": "43fa64e29cd960fd0cbac3c99846cf41",
".git/objects/31/43772a4bfe6bed1f05dc0c03f048636af1f745": "f7579b4f08f7c1980b71f4b1ad8b7400",
".git/objects/62/2bc870f56484bdff4d9f0c8937113d094a19fc": "db41cb32a3136442010c907b2a4b45ef",
".git/objects/62/19a86c67dd38836ae7bc56a60004325a937dfa": "76d4e79b049620c1e43e5331327198e1",
".git/objects/54/4fde36438a630b8997fe341ef7a75daa490f38": "7deb70ee55a8a7164d336ab90df7791c",
".git/objects/98/7b7c10ed6e0045289d62e5df396a6a1de7da1e": "4b7c9d14625b228a82ce0b6ef9964c3b",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/3f/a02750df7de2ae68258b239a90bbdc7b25a14d": "44e78fbcad71576e035f63a337924f3a",
".git/objects/3f/0702b03e1c87a6754db29a77f4e3347cee3ccc": "ac896ed5ea1557df23d0d4dfe4eb356a",
".git/objects/30/55090b3f08293f4506b8798e949f60192be2c9": "55198d1d2668cf7c57b3e2e5ee1bdb1f",
".git/objects/08/089f230d64372970224d8482ed4a5f5bec1ba3": "221c9963aa96d118d5d06dfa8ca4d044",
".git/objects/6d/d1ef680bc090b4342290484f24b523a044bc69": "1e0e9a66176758265bd22d8a16bab2cc",
".git/objects/6d/19ad8ace633d406009134d6a86cc74a2be968a": "8d34fcd0ac96c677e364dfdac110d344",
".git/objects/6c/ac7ac62db5675a21187c763eac8fc49247a7db": "1358d51285517bf7034ffdd73d5e932e",
".git/objects/99/b62f7101f4f2f44099fda255668a8ea1e528a5": "c776a0314b8ac8b211204fbd8a20452e",
".git/objects/52/0c94419732c4d4a8e0b77b7d3e225ba03e6e30": "af91675e9c303542bb9d35be2c452227",
".git/objects/55/8784253329e0048fd142dca943f288db33a8bb": "dd2b3e023c78e2a0c7474126f2833039",
".git/objects/0f/76a5677eb2823ad087dfc8f38ec52ddede2e7d": "9d215ad0c35cb483bec7d0bf22774933",
".git/objects/0a/9c5f7ef8b33f9948a7df59b5b0d17f3aefdf04": "53db4199759e13ed9d578d331d367aa5",
".git/objects/0a/0ff837311fe0fb4ccd0e157216bc9cac8b2012": "548ebe3175a9878319b0d3526005bea2",
".git/objects/0a/0170c8052a199fd59f54706cef515cb89c5497": "41a2eca218e39a3ef73696cfb2aa6258",
".git/objects/90/504e4767c37aee8a56aa06fbc870694ec57fa5": "49b9790c27571eb26ce6ab8d71027ad6",
".git/objects/bf/df81c89822aa2ab563c84ff3a69ffbfa53a645": "2c84026b91d0435512cc15fc137c2ac5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/7c80ff8724a9421cca1ed98a1e722cc2d536a1": "602acd6ab89dc9fe676a0dff599d689d",
".git/objects/ba/3da28ede62a7a758d573cf26fd4fa6495c2ebc": "6b33e8273a45e8214c614d8097e93dbe",
".git/objects/b8/0283732c5b66645c729eb018b1563cef2b837c": "d89cbc7e7dedb198604049c92004187d",
".git/objects/b1/32bf792026186f9870713f779c05254888b8b5": "5b5f405c4622f34f8074e55fb0498f4e",
".git/objects/a9/b8bd4b760ddf7f16e19bfdbc44bade1729cb25": "355b03464fcba5cb2aeb595e750f3a67",
".git/objects/b7/1385c92e03e258f162536d8dff3722dcd32cbd": "12f6e82121b3f068cac86dbb5f212ca3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/9da4cb1c4291cfdafcbcc6620c6ccfc8047854": "7c9a269409c0654aaa7255873ea1b90d",
".git/objects/de/52e8135338b0cb9a90a6c989babc8c990a57da": "99f20bdce64644ad3b704c110ba4c837",
".git/objects/b0/ba6b4f8fae3ecc7e1cc409b68ca02eb9014ee0": "1e78f983af455d0313518932ea61d2e0",
".git/objects/a6/76c86a453aba52e26586b42dba8c1e983cc99e": "1267d563c2c37ef3c61fd1639534c131",
".git/objects/a6/f9a922ad48e6d5cfb12124d164d0b34d19f79c": "204996339e3bbe6868352a42d3fd371c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6b9f72c60fcc553764555658a5952e51fe117a": "c37f5cd444d4baf3131325858d8f7e50",
".git/objects/ef/4a81af7efd7c7ef8999d96f1981aa4186d7dbd": "eb662ed873167972409673723f726d02",
".git/objects/ef/2bdb599e933389530e00ae3983acde10648976": "f3a3593c1161f71a85352693b624630a",
".git/objects/ef/8518d9c4d4235082332eb3a7ea2c72b7b8976e": "beaedb50eeb6d9e091275d8ad39fa0aa",
".git/objects/ef/098d7ebaa0f92a54707676c58a12743632582c": "3bc1625966f37ada7074a7f7042982f9",
".git/objects/c4/8a11d6f6918289ac0e5f3a2441c3aa120f44eb": "a0ea993b8b641feedf32122b03d65fe5",
".git/objects/e1/bc6ace9e103399389142385d9f6ee77a989188": "0958b1872f570949f7914ddcb9883430",
".git/objects/cd/a41aa75d47da85e6f35fdd6c4b1cdb95ebcf1f": "f37e29052226f85e72879225302c4a7e",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f7/42645deabbd9f410e29f139f1384a9ee173ad9": "58ec5af9a3e2be591f9897bd7be9812b",
".git/objects/fa/0ae44a4fa9ae6bf096e6de006a25c3f82437db": "c3fac38e118d1b711f93383ab0dfdbc1",
".git/objects/c2/6081e51f8b31ea60cbeec1372fc04614e43059": "e02a6cdd0e3ea0edc6576dcd6f9882ca",
".git/objects/c2/8e560e678ab1aba103ce0c22585af4c2d16514": "805fc3f9f9380ac2467da26502251795",
".git/objects/c2/e022d8d7770f272d94d0db8b683ab9089ff25d": "ac60dfc027f35006feff90b21fb77ca3",
".git/objects/e9/0e82f4aec1db63a205f79709e9f31576ed6f1f": "e7ad3868e6db5ec0c817d5b1f6230187",
".git/objects/f1/2cbd78a113978228b96d9dba1f56914f38737e": "008c58106f54ea7721ab3a5ece9aedc3",
".git/objects/cb/026b08492a6f0428f948ee4259bf9704f847bb": "331c81b652648d4e8c6f58438d1d0b8b",
".git/objects/ce/0915366fb73a41f2fa22b51ba08e12fef231b0": "1a2ec432ce80f4e3c730aaaa384e79f2",
".git/objects/2c/3ccccab1f99e698ac25c0eef94fccb11da48e2": "02fc7b86a6ef8fe82e7734ce8b838403",
".git/objects/2c/db57d2e9b798476a23ab86d5f4ac0efaa5ce67": "398a5df58ed087e4e8ec487c91c6fa9c",
".git/objects/83/0cf39dca879000e37826033025f4dae1e4c0c4": "d18e2afc6a38872e446586835e40276d",
".git/objects/77/13b90a1a564168a072653990ec3f61027085ca": "bd2ba0efd62e0e576fbe09741f12e4ac",
".git/objects/70/695849a891753d68188bbf63698f297ea6d7c1": "1666c401b6d30f9bfc4a7dbda29f088d",
".git/objects/70/2fab08e56b17c4dd3176cea4a9814689a507f6": "011a41198eee9d8c2b8ebe7826b375f2",
".git/objects/4a/79f6a0e1e536bf01961f22315bc8228d752eb7": "453e4b23fb7cd80888cdd46e74ab774c",
".git/objects/8d/857cdfc7229ee61d6c59a9e162bd2a400ab9e4": "bf77454ad47a6c1995f2c78f7bdb0a5d",
".git/objects/85/52b0ed4e18c942d6ad1d3dd1e4428a692a7a4b": "5a50ac0ec95d2481bcb5b5df31114a90",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/7494e06cce911166e3db8e5d96895d5481e1ac": "5b6a491a53c574e006bf3cd9624f2ea0",
".git/objects/76/5f77139985613c1ed016ab7f6ee4f6a85ab63f": "50fd3b03af8ae29d98c1ba07c278e5c7",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/40/fec9c536b7afef4a9fca9ae112a6bf724244cf": "fb1343b1ea82e8388222f7c8a85b5198",
".git/objects/47/a5b1f1c267dae531c638244dd9248488cbd80f": "67f08a05d37a72f0e7f38496a290a696",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ada06967fe2fdcde1fc89d3406c329c7",
".git/logs/refs/heads/master": "ada06967fe2fdcde1fc89d3406c329c7",
".git/logs/refs/remotes/origin/master": "4b0e7fe9c73fa1ada7087b9aa6b57860",
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
".git/refs/heads/master": "f237cda206c9685874abdbf14752345e",
".git/refs/remotes/origin/master": "f237cda206c9685874abdbf14752345e",
".git/index": "7fae8381c66b4e93e5e696fbd95ef364",
".git/COMMIT_EDITMSG": "e2c1e09f48437a1defa98f9604b13c39",
".git/FETCH_HEAD": "d4e07574377e9625a1db806f90907458",
"assets/AssetManifest.json": "ce59ae1405ce59d4adafc5befdb04ab4",
"assets/NOTICES": "1df8d4cd35002c64c9dd58dc62b18a1f",
"assets/FontManifest.json": "5140fee4f897a8069d9e54cea7e84eb6",
"assets/AssetManifest.bin.json": "0e78ead1c9bb36f44e5c837cfd872dd4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e82f9d59c8ba3d220029de6a1cecd6ea",
"assets/fonts/MaterialIcons-Regular.otf": "3057747c4e4ecade70fea593b0ea1cd7",
"assets/assets/images/beta_banner.png": "d836076674e448f63a05c9b170291649",
"assets/assets/images/ok_logo_button.gif": "99dcf1ee308fd6c2281fefeb8ace52e4",
"assets/assets/images/logo_button.png": "b6509a7cb3a67465b6415f53e614017a",
"assets/assets/images/ok_button.png": "7ccc3edd8dd7ec51e0a1d17a1d0d9db1",
"assets/assets/images/background.png": "a42cb787997a63f4fa42b9dd4a297113",
"assets/assets/images/from_here.png": "18f1cce5ffb8b97380afb9da010918ba",
"assets/assets/images/beta_icon.jpeg": "0020c8a4ecc1840e833ccd65429304af",
"assets/assets/images/top_bg.png": "e09d68f80844decbb936063a31eaff01",
"assets/assets/fonts/SpoqaHanSansNeo-Thin.otf": "0e46d96cafdedeeb4b40598ee00f4e7c",
"assets/assets/fonts/SpoqaHanSansNeo-Light.otf": "9b97934b95a9237af599e2c4a99ad5cf",
"assets/assets/fonts/SpoqaHanSansNeo-Bold.otf": "8ea1d9004a8f295b800c3c9b89a9c07a",
"assets/assets/fonts/SpoqaHanSansNeo-Medium.otf": "c7160a32d3d50ac705392a5f50cc96dd",
"assets/assets/fonts/BMJUA.otf": "7592a08778fd0fc3b37b052386aac91a",
"assets/assets/fonts/SpoqaHanSansNeo-Regular.otf": "d66ff1769f2e52a90fd58c0e307094e7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
