const gulp = require("gulp");
const browserSync = require("browser-sync");

gulp.task("default", () => {
    browserSync.init({
        server: "./"
    });
    gulp.watch("./*.html").on("change", browserSync.reload);
    gulp.watch("css/*.css").on("change", browserSync.reload);
    gulp.watch("js/*.js").on("change", browserSync.reload);
})