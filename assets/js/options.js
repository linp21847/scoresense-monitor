$(document).ready(function() {
	console.log("Options page loading...");

	var downloadImage = function(dataUrl, name) {
		console.log("hey");
		var link = document.createElement("a");
		link.download = (name) ? name : "account-detail-view.png";
		link.href = dataUrl;
		document.body.appendChild(link);
		link.click();
	};

	chrome.extension.sendMessage({msg:"images"}, function(res) {
		var images = res.data,
			$body = $("body"),
			maxWidth = 0;

		if (images.length === 0)
			return;

		for (var i = 0; i < images.length; i ++) {
			item = images[i];

			if (maxWidth < item.width)
				maxWidth = item.width;

			$("<img/>", {src: item.src}).width(item.width).height(item.height).appendTo($body);
		}

		html2canvas(document.body, 
		{
			onrendered: function(canvas) {
				function dataURItoBlob(dataURI) {
					// convert base64 to raw binary data held in a string
					var byteString = atob(dataURI.split(',')[1]);

					// separate out the mime component
					var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

					// write the bytes of the string to an ArrayBuffer
					var arrayBuffer = new ArrayBuffer(byteString.length);
					var _ia = new Uint8Array(arrayBuffer);
					for (var i = 0; i < byteString.length; i++) {
						_ia[i] = byteString.charCodeAt(i);
					}

					var dataView = new DataView(arrayBuffer);
					var blob = new Blob([dataView], { type: mimeString });
					return blob;
				}
				height = $("body").height();
				img = Canvas2Image.convertToPNG(canvas, maxWidth, height);

				blob = dataURItoBlob(img.src);
				blobURL = URL.createObjectURL(blob);

				downloadImage(blobURL, res.name.split(" ")[0] + ".png");

				tmpTimer = setTimeout(function() {
					clearTimeout(tmpTimer);
					chrome.extension.sendMessage({msg: "close-tab"});
				}, 300);
			}
		});
	})
});