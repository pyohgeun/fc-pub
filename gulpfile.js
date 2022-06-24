const { series, parallel, src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const connect = require('gulp-connect');
function scss(done){
    return src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(dest('./dist/css'))
    .pipe(connect.reload());
}
function html(){
    return src('./**/*.html')
    // .pipe(dest('./'))
    .pipe(connect.reload());
}
function serve(){
    connect.server({
        root: './',
        livereload: true
    });
}
function build(done){
    
    watch('./src/scss/*.scss', scss);
    watch('./**/*.html', html);
    
    done();
}

exports.default = series(scss, build, serve);