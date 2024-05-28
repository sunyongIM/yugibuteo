'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1bb8d6c9239637cd0a2251ef910ddd33",
"version.json": "9c0c3ede1cc32b6154ccc0883feb0d4c",
"logo_button.png": "b6509a7cb3a67465b6415f53e614017a",
"index.html": "1cb98fa39acd37fca77963affe83818d",
"/": "1cb98fa39acd37fca77963affe83818d",
"CNAME": "f051d41d23db80aff80afcf78e765d7c",
"main.dart.js": "874800c0d9b7c773e0759c27419b3d78",
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
".git/objects/95/22ccd1cb27ac016bad4f0f962bf84ec4eb3e11": "ee1d0c89c22281b3333b3dc6d4e51771",
".git/objects/59/ae7fc110ccd41d857150e9856a5d791bf8cb78": "f23680a0be7cccc9539fcf0f196bb73d",
".git/objects/3b/c140f876d369302db8cec5bf61609bee507111": "f29c912fa0f45b5a67053cb90d1bf2b4",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/93/a5eaa2635ec7e00c39f7e68d15bdb10ca9849f": "8dff245d72b9f390488484e64caae271",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/05/eeb72a59dcb626de2141d3b0326e126cf07bf7": "d451a420b83a58d412b62bcdc980fe53",
".git/objects/05/0898abb733fb298de6f8e663c5e098eceb99b8": "30100787ef5f7c5b515c61ad4ec5b3fd",
".git/objects/a4/bf0be7cea1ed86f353e710ca34350935d764cc": "3b0a12407b192d34e1b96780c997c439",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/b4/5743a40b8788a050b706fddc7d09f5c1d49965": "abb4abe6b6bf7c5cff8d68d34e16e6fd",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/a5/299a345953b53c4ccb66f5112f1bbc7326c742": "d00ef5d0b47ee152259228885ed48986",
".git/objects/bd/6d4c73fbd516a8458977f9e6a4a588f62320c7": "35d720a9e4418567eadbf0cc700c5667",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/b6c107de4f6db83a7410a2642a7a04d2ae3480": "c0fd24b2494f0db94d9779a2c242635c",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e3/6f99c1df1f9f0ede356fafbfe50ac8d2816403": "dac9ded78c470c44f0625971a7ed1b64",
".git/objects/e3/256302d4f9eb549ab0f6283dbe6aa4e45344e6": "35d5071aced4ec36afcb5263b0c512cb",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/11/0de85efbccd226ce39eb13df21b864b5f29b46": "db13f322c7ad00a0ca3ee4cbc1cf17a1",
".git/objects/16/6cbc5a4162563a275c1f67d782b90c900fe82d": "c28ea61bd8ecddc75e54533570cbeb57",
".git/objects/42/452680c1785f31f2a6aaa9dd4e3bf759c366ae": "b4256cfac652456d0cdc56fac6287af2",
".git/objects/89/5b36439966dc46812f40afe77c2dcd2b401707": "e8dd2a444efa175116e52aabbc96131b",
".git/objects/28/8f7c2e239af951a41eb720b089b34af09c54e1": "cbe8ee48e34fc9b0f560bd74a940e978",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/2f/906c6684e14103f5c7204e62396a2f3f9a1b6d": "7b5acecd385ae2c7d3e33e47dd7cd806",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9a/e778b91a4f79895e46454393ec8f040009b8e2": "0967e35b8aa338be3bc920a9e3aea702",
".git/objects/36/b1a9da487fe9dff23f91dc43338179534b955b": "fc50efcc8e27b49d78e62c01498a5923",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/62/19a86c67dd38836ae7bc56a60004325a937dfa": "76d4e79b049620c1e43e5331327198e1",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/08/089f230d64372970224d8482ed4a5f5bec1ba3": "221c9963aa96d118d5d06dfa8ca4d044",
".git/objects/0a/0ff837311fe0fb4ccd0e157216bc9cac8b2012": "548ebe3175a9878319b0d3526005bea2",
".git/objects/0a/0170c8052a199fd59f54706cef515cb89c5497": "41a2eca218e39a3ef73696cfb2aa6258",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/3da28ede62a7a758d573cf26fd4fa6495c2ebc": "6b33e8273a45e8214c614d8097e93dbe",
".git/objects/b8/0283732c5b66645c729eb018b1563cef2b837c": "d89cbc7e7dedb198604049c92004187d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/9da4cb1c4291cfdafcbcc6620c6ccfc8047854": "7c9a269409c0654aaa7255873ea1b90d",
".git/objects/b0/ba6b4f8fae3ecc7e1cc409b68ca02eb9014ee0": "1e78f983af455d0313518932ea61d2e0",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/2bdb599e933389530e00ae3983acde10648976": "f3a3593c1161f71a85352693b624630a",
".git/objects/ef/8518d9c4d4235082332eb3a7ea2c72b7b8976e": "beaedb50eeb6d9e091275d8ad39fa0aa",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/fa/0ae44a4fa9ae6bf096e6de006a25c3f82437db": "c3fac38e118d1b711f93383ab0dfdbc1",
".git/objects/e9/0e82f4aec1db63a205f79709e9f31576ed6f1f": "e7ad3868e6db5ec0c817d5b1f6230187",
".git/objects/f1/2cbd78a113978228b96d9dba1f56914f38737e": "008c58106f54ea7721ab3a5ece9aedc3",
".git/objects/ce/0915366fb73a41f2fa22b51ba08e12fef231b0": "1a2ec432ce80f4e3c730aaaa384e79f2",
".git/objects/83/0cf39dca879000e37826033025f4dae1e4c0c4": "d18e2afc6a38872e446586835e40276d",
".git/objects/4a/79f6a0e1e536bf01961f22315bc8228d752eb7": "453e4b23fb7cd80888cdd46e74ab774c",
".git/objects/8d/857cdfc7229ee61d6c59a9e162bd2a400ab9e4": "bf77454ad47a6c1995f2c78f7bdb0a5d",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "528f77663f1bb8da569f44320377d665",
".git/logs/refs/heads/master": "528f77663f1bb8da569f44320377d665",
".git/logs/refs/remotes/origin/master": "22498fef1425ea8bbef84863aae64d36",
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
".git/refs/heads/master": "f789c3183ec4bafcbb1a778ef659c596",
".git/refs/remotes/origin/master": "f789c3183ec4bafcbb1a778ef659c596",
".git/index": "2529a3d38f20d0f7494cf07bd5355b19",
".git/COMMIT_EDITMSG": "7de035f7a527f25257d0ffb087757124",
".git/FETCH_HEAD": "d4e07574377e9625a1db806f90907458",
"assets/AssetManifest.json": "ce59ae1405ce59d4adafc5befdb04ab4",
"assets/NOTICES": "a4b1ee7038fe00b7578f1505c440cd3f",
"assets/FontManifest.json": "5140fee4f897a8069d9e54cea7e84eb6",
"assets/AssetManifest.bin.json": "0e78ead1c9bb36f44e5c837cfd872dd4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e82f9d59c8ba3d220029de6a1cecd6ea",
"assets/fonts/MaterialIcons-Regular.otf": "9917b4a0c379580e145bd0a7d4a03b5a",
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
