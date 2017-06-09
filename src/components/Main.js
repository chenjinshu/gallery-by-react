require('normalize.css');
require('styles/App.scss');

// 获取imageDatas.json图片数据
let imageDatas = require('../data/imageDatas.json');
//console.log(imageDatas);

// 对获取的图片数据设置图片被打包后的Url
imageDatas.length > 0 && imageDatas.forEach(item => {
  item.imageUrl = require('../images/' + item.filename);
});
//console.log(imageDatas);

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec"></section>
        <nav className="controller-nav"></nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
