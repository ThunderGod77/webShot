const imagemin = require("imagemin");
const imageminPngquant = require("imagemin-pngquant");

const { upload } = require("./upload");

exports.minUpload = async (image) => {
  const files = await imagemin.buffer(image, {
    plugins: [
      imageminPngquant({
        quality: [0.6, 0.8],
      }),
    ],
  });
  await upload(files);
};
