const { series, parallel, src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const babel = require('gulp-babel');
const connect = require('gulp-connect');
const fs = require('fs');
function sitemap(done){
    const sitemap = fs.readFile('./index.html', 'utf8', (err, data) => {
        console.log(data);
    });
    done();
    return sitemap
}
function js(done){
    return src('./src/js/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(dest('./dist/js'))
    .pipe(connect.reload());
}
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
    
    watch('./src/scss/**/*.scss', scss);
    watch('./src/js/*.js', js);
    watch('./**/*.html', html);
    
    done();
}
exports.sitemap = sitemap;
exports.default = series(scss, js, build, serve);