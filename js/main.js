console.log(1)


const windowHeight = $(window).height();
let previewPhotoHeight = windowHeight - $("header").height();

$(".preview_photo").height(previewPhotoHeight);