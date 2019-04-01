var gulp = require("gulp");
var minCss = require("gulp-clean-css");
var sass = require("gulp-sass");
var webserver = require("gulp-webserver");

gulp.task("minCss", () => {
    return gulp.src("./H5/scss/*.scss")
        .pipe(sass())
        .pipe(minCss())
        .pipe(gulp.dest("./H5/css/"))
})

gulp.task("server", function() {
    return gulp.src("./H5/")
        .pipe(webserver({
            port: 3333,
            livereload: true,
            proxies: [
                { source: "/api/getFirstHead", target: "http://localhost:3000/api/getFirstHead" },
                { source: "/api/getido", target: "http://localhost:3000/api/getido" }

            ]
        }))
})