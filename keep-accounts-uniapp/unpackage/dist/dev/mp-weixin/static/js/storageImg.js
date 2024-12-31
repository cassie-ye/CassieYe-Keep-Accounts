import {
	md5
} from '@/static/js/md5jm.js';
export function getEncryption(key) {
	return md5(key, 32);
}

export function setCacheImages(urlObj) {
	return new Promise((resolve, reject) => {
		// #ifdef MP-WEIXIN
		try {
			// const realUrl = href.split("?")[0];

			const fileIdentifier = urlObj.name;

			const fileManager = uni.getFileSystemManager();

			// 读取缓存的所有文件
			const dir = fileManager.readdirSync(wx.env.USER_DATA_PATH);

			// 检查是否存在缓存文件
			const cachedFile = dir.find((item) => item.indexOf(fileIdentifier) > -1);

			if (cachedFile) {
				// 返回对应文件路径
				resolve(`${wx.env.USER_DATA_PATH}/${cachedFile}`);
			} else {
				downloadCanchFile(urlObj)
						
					.then((response) => {
						resolve(response);
					})
					.catch(() => {
						// 下载失败可能是网络问题，返回原始图片链接
						reject(urlObj.value);
					});
			}
		} catch (error) {
			reject(urlObj.value);
		}
		// #endif

		// #ifndef MP-WEIXIN
		resolve(urlObj.value);
		// #endif
	});
}

function downloadCanchFile(urlObj) {
	// 使用Set存储允许的文件扩展名
	const allowedImageExtensions = new Set([
		"bmp",
		"jpg",
		"jpeg",
		"jpe",
		"jxr",
		"png",
		"tif",
		"tiff",
		"avif",
		"xbm",
		"pjp",
		"svgz",
		"ico",
		"svg",
		"jfif",
		"webp",
		"pjpeg",
		"gif",
		"iff",
		"ilbm",
		"ppm",
		"pcx",
		"xcf",
		"xpm",
		"psd",
		"mng",
		"sai",
		"psp",
		"ufo"
	]);
	let _url=urlObj.name.split("?")[0]
	let suffixArr=_url.split(".")
	let suffix=suffixArr[suffixArr.length-1]
	let smallUrlArr=_url.split("/")
	let smallUrl=smallUrlArr[smallUrlArr.length-1]
	return new Promise((resolve, reject) => {
		uni.downloadFile({
			url:urlObj.value,
			header: {},
			success:(downloadRes)=> {
				console.log(downloadRes);
				if (downloadRes.statusCode === 200) {

					const cancheFilePath = `${wx.env.USER_DATA_PATH}/${smallUrl}`;
					const FileManager = uni.getFileSystemManager();
					
					FileManager.saveFile({
						tempFilePath: downloadRes.tempFilePath,
						filePath: cancheFilePath,
						success(saveResult) {
							if (saveResult.errMsg === "saveFile:ok") {
								resolve(saveResult.savedFilePath);
							} else {
								reject(new Error("Failed to save file."));
							}
						},
						fail(e) {
							console.log(e);
							reject(new Error("Failed to save file."));
						},
					});
				} else {
					reject(new Error("Failed to download file. Status code: " + downloadRes
					.statusCode));
				}
			},
			fail:(error)=> {
				reject(new Error("Download failed: " + error.errMsg));
			},
		});
	});
}