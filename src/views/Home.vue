<template>
  <div class="home" v-title data-title="AFresh-把新鲜带回家">
    <header>
      <img class="logo" src="@/assets/logo.png" alt="AFresh农产品交易平台" />
      <div class="search">
        <input type="text" placeholder="芒果" />
        <div class="search_submit">搜索</div>
      </div>
      <div class="shopping_cart">
        <font-awesome-icon icon="fa-solid fa-cart-shopping" />
        我的购物车
        <div class="shopping-badge">0</div>
      </div>
    </header>

    <!-- 优势 -->
    <div class="odds">
      <div class="odds_info">
        <div class="title">食品安全</div>
        <div class="detail">精选生鲜 严格质检</div>
      </div>
      <div class="odds_info">
        <div class="title">全程冷链</div>
        <div class="detail">自营物流 安全可控</div>
      </div>
      <div class="odds_info">
        <div class="title">鲜活天然</div>
        <div class="detail">绿色生态 京东精选</div>
      </div>
      <div class="odds_info">
        <div class="title">产地直采</div>
        <div class="detail">限定产源 质量保证</div>
      </div>
      <div class="odds_info">
        <div class="title">无忧售后</div>
        <div class="detail">优鲜赔 售后通道</div>
      </div>
    </div>

    <!-- main -->
    <div class="main">
      <div class="sort">
        <div class="fresh" v-for="item in 8">
          <img src="https://files.cnhnb.com/pc/home/cate-sgzw.png" alt="" />
          <div>
            <h5>水果</h5>
            <span>热带水果</span>
            <span>柑橘类</span>
            <span>浆果类</span>
            <span>瓜果类</span>
          </div>
        </div>
      </div>
      <div class="banner">
        <b-carousel
          id="carousel-1"
          :interval="3000"
          fade
          controls
          indicators
          background="#ababab"
          img-width="600"
          img-height="345"
          style="text-shadow: 1px 1px 2px #333"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Slides with custom text -->
          <b-carousel-slide
            img-src="https://s2.loli.net/2022/03/30/MQzIhtPASsf5Hgv.jpg"
            ></b-carousel-slide>

          <!-- Slides with image only -->
          <b-carousel-slide
            img-src="https://image.cnhnb.com/image/jpg/miniapp/2021/11/29/0fdc1ba6d938495697208a57c519528b.jpg"
          ></b-carousel-slide>
        </b-carousel>
        <div class="activity">
          <img class="slide" src="../assets/banner1.png" />
<!--          <img-->
<!--            src="https://image.cnhnb.com/image/jpg/miniapp/2022/03/22/5b7435bb933b4601a49724c215a6d4d1.jpg"-->
<!--            alt=""-->
<!--          />-->
          <img
            src="https://image.cnhnb.com/image/jpg/miniapp/2021/12/18/4744bcb3a082435098102e9cd1a3bf0b.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="user_info">
        <h6>欢迎来到AFRESH农产品交易平台！</h6>
        <div class="log_in">
          <div class="login">登录</div>
          <div class="register">免费注册</div>
        </div>

        <div class="line"></div>

        <div class="service">
          <div class="buyer">买家服务</div>
          <div class="seller">卖家服务</div>
        </div>

        <div class="service_sort">
          <div>
            <font-awesome-icon icon="fa-solid fa-basket-shopping" />
            <p>采购管理</p>
          </div>
          <div>
            <font-awesome-icon icon="fa-solid fa-note-sticky" />
            <p>订单管理</p>
          </div>
          <div>
            <font-awesome-icon icon="fa-solid fa-ticket" />
            <p>优惠券</p>
          </div>
        </div>

        <p class="init">进入买家中心 ></p>

        <div class="line"></div>
      </div>
    </div>

    <!-- 热门供应 -->
    <div class="hot_supply">
      <h4>热门供应</h4>

      <div class="sort_item" v-for="item in hot_supply_item" :key="item.sort">
        <div class="head" :style="item.url + item.color">
          <h5>{{ item.sort }}</h5>
          <p>{{ item.sort_detail }}</p>
          <div class="block" :style="item.background"></div>
        </div>

        <div class="sort_detail">
          <div class="item" v-for="sort in item.subdivision">
            <p>{{ sort.title }}</p>
            <div>
              <span v-for="detail in sort.detail">{{ detail }}</span>
            </div>
          </div>
        </div>
        <div class="recommendation">
          <div class="title">好物推荐</div>

          <div class="recommendation_info">
            <div class="item">
              <img
                src="https://image.cnhnb.com/image/jpeg/head/2021/02/25/7de44daa55f048eb91af0f1b5a492713.jpeg?imageView2/1/w/525/h/525/format/jpg/interlace/1/quality/100/ignore-error/1"
                alt=""
              />

              <div class="shops-price-bg">
                <span class="price">225.00元</span>
                <span class="turnover">成交3150</span>
              </div>

              <div class="title-field">
                <div class="one-line">
                  <div class="title-tag">优选</div>
                  <span>新鲜羊肚菌1斤/2斤送鲜银耳</span>
                </div>
                <div class="cw-tags">
                  <div class="cw-tag">保证金2000元</div>
                </div>
              </div>

              <div class="honor_tag">
                <img src="	https://image.cnhnb.com/supply/icon/vip_y3.png" alt="" />
                <img src="	https://image.cnhnb.com/supply/icon/level9.png" alt="" />
                <img src="	https://image.cnhnb.com/supply/icon/buy_protect.png" alt="" />
                <img src="	https://image.cnhnb.com/supply/icon/gjqy.png" alt="" />
              </div>
            </div>
            <div class="item">
              <img
                src="https://image.cnhnb.com/image/jpeg/head/2020/08/04/3663b30a80c1470898f065d808a8e861.jpeg?imageView2/1/w/525/h/525/format/jpg/interlace/1/quality/100/ignore-error/1"
                alt=""
              />
              <div class="shops-price-bg">
                <span class="price">17.60元/斤</span>
                <span class="turnover">成交3150</span>
              </div>

              <div class="title-field">
                <div class="one-line">
                  <div class="title-tag">优选</div>
                  <span> 黑木耳干货500g东北特产秋木耳椴木小碗耳</span>
                </div>
                <div class="cw-tags">
                  <div class="cw-tag">保证金2000元</div>
                </div>
              </div>

              <div class="honor_tag">
                <img src="	https://image.cnhnb.com/supply/icon/vip_y3.png" alt="" />
                <img src="	https://image.cnhnb.com/supply/icon/level9.png" alt="" />
                <img src="	https://image.cnhnb.com/supply/icon/buy_protect.png" alt="" />
                <img src="	https://image.cnhnb.com/supply/icon/gjqy.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 行业资讯 -->
    <div class="news">
      <h4>行业资讯</h4>
      <div class="content">
        <div class="banner">
          <b-carousel
            id="carousel-1"
            :interval="3000"
            fade
            controls
            indicators
            background="#ababab"
            img-width="600"
            img-height="345"
            style="text-shadow: 1px 1px 2px #333"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <!-- Slides with custom text -->
            <b-carousel-slide
              img-src="https://image.cnhnb.com/image/jpg/miniapp/2022/03/09/c938cbe9ab7e40dab722fe115959e635.jpg"
            >
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide
              img-src="https://image.cnhnb.com/image/jpg/miniapp/2021/11/29/0fdc1ba6d938495697208a57c519528b.jpg"
            ></b-carousel-slide>
          </b-carousel>
        </div>

        <div class="news_list">
          <div class="news_sort">热门资讯</div>

          <a class="news_item" href="#" v-for="item in hot_news" :key="item.title">
            <div class="point"></div>
            <div class="new_title">{{ item.title }}</div>
          </a>
        </div>

        <div class="news_list">
          <div class="news_sort">最新资讯</div>

          <a class="news_item" href="#" v-for="item in new_news" :key="item.title">
            <div class="point"></div>
            <div class="new_title new_news_item">
              <span>{{ item.title }}</span>
              <span>2022-03-29</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      slide: 0,
      sliding: null,
      hot_news: [
        {
          title: '农村养殖什么，不愁没有销路？',
        },
        {
          title: '2022年柠檬价格多少钱一斤？',
        },
        {
          title: '明天的猪价能上涨吗？',
        },
        {
          title: '大丽花有哪些种类？',
        },
        {
          title: '2022年牛蛙价格多少钱一斤？产地分布在哪？',
        },
        {
          title: '利润很吓人的10个冷门种植',
        },
        {
          title: '2022黄鳝价格多少钱一斤？',
        },
        {
          title: '2022年第11周热搜农产品行情：柠檬热度飙升，小龙虾供需两旺，辣椒价格走强',
        },
      ],
      new_news: [
        {
          title: '农村养殖什么，不愁没有销路？',
        },
        {
          title: '云南省农民合作社省级示范社评定及监测办法',
        },
        {
          title: '陕西省实施〈农村土地经营权流转管理办法〉细则',
        },
        {
          title: '羊粪含氮磷钾成分是多少？',
        },
        {
          title: '陕西省无规定动物疫病小区管理办法',
        },
        {
          title: '养稻田鱼属于哪种农业模式？',
        },
        {
          title: '一亩油菜花能放几箱蜂？',
        },
        {
          title: '种豌豆的方法步骤',
        },
      ],
      hot_supply_item: [
        {
          url: 'background-image: url(https://image.cnhnb.com/image/png/miniapp/2021/01/18/e3f7008104ae4f3d8edbbdf70e6bdefe.png);',
          color: 'color:#54ac2c',
          background: 'background:#3da82c',
          sort: '蔬菜',
          sort_detail: '品类丰富 以质论价',
          subdivision: [
            {
              title: '葱姜蒜类',
              detail: ['韭黄', '蒜苗', '大蒜', '生姜', '大葱', '小葱', '蒜苔', '洋葱', '洋姜'],
            },
            {
              title: '根茎菜类',
              detail: ['鲜百合', '芦笋', '萝卜', '胡萝卜', '竹笋', '魔芋', '凉薯', '山药'],
            },
            {
              title: '葱姜蒜类',
              detail: ['韭黄', '蒜苗', '大蒜', '生姜', '大葱', '小葱', '蒜苔', '洋葱', '洋姜'],
            },
            {
              title: '葱姜蒜类',
              detail: ['韭黄', '蒜苗', '大蒜', '生姜', '大葱', '小葱', '蒜苔', '洋葱', '洋姜'],
            },
            {
              title: '葱姜蒜类',
              detail: ['韭黄', '蒜苗', '大蒜', '生姜', '大葱', '小葱', '蒜苔', '洋葱', '洋姜'],
            },
            {
              title: '葱姜蒜类',
              detail: ['韭黄', '蒜苗', '大蒜', '生姜', '大葱', '小葱', '蒜苔', '洋葱', '洋姜'],
            },
          ],
        },
        {
          url: 'background-image: url(https://image.cnhnb.com/image/png/miniapp/2021/01/18/e3f7008104ae4f3d8edbbdf70e6bdefe.png);',
          color: 'color:#54ac2c',
          background: 'background:#3da82c',
          sort: '蔬菜',
          sort_detail: '品类丰富 以质论价',
          subdivision: [
            {
              title: '葱姜蒜类',
              detail: ['韭黄', '蒜苗', '大蒜', '生姜', '大葱', '小葱', '蒜苔', '洋葱', '洋姜'],
            },
            {
              title: '根茎菜类',
              detail: ['鲜百合', '芦笋', '萝卜', '胡萝卜', '竹笋', '魔芋', '凉薯', '山药'],
            },
            {
              title: '葱姜蒜类',
              detail: ['韭黄', '蒜苗', '大蒜', '生姜', '大葱', '小葱', '蒜苔', '洋葱', '洋姜'],
            },
            {
              title: '葱姜蒜类',
              detail: ['韭黄', '蒜苗', '大蒜', '生姜', '大葱', '小葱', '蒜苔', '洋葱', '洋姜'],
            },
            {
              title: '葱姜蒜类',
              detail: ['韭黄', '蒜苗', '大蒜', '生姜', '大葱', '小葱', '蒜苔', '洋葱', '洋姜'],
            },
            {
              title: '葱姜蒜类',
              detail: ['韭黄', '蒜苗', '大蒜', '生姜', '大葱', '小葱', '蒜苔', '洋葱', '洋姜'],
            },
          ],
        },
        {
          url: 'background-image: url(https://image.cnhnb.com/image/png/miniapp/2021/01/18/e3f7008104ae4f3d8edbbdf70e6bdefe.png);',
          color: 'color:#54ac2c',
          background: 'background:#3da82c',
          sort: '蔬菜',
          sort_detail: '品类丰富 以质论价',
          subdivision: [
            {
              title: '葱姜蒜类',
              detail: ['韭黄', '蒜苗', '大蒜', '生姜', '大葱', '小葱', '蒜苔', '洋葱', '洋姜'],
            },
            {
              title: '根茎菜类',
              detail: ['鲜百合', '芦笋', '萝卜', '胡萝卜', '竹笋', '魔芋', '凉薯', '山药'],
            },
            {
              title: '葱姜蒜类',
              detail: ['韭黄', '蒜苗', '大蒜', '生姜', '大葱', '小葱', '蒜苔', '洋葱', '洋姜'],
            },
            {
              title: '葱姜蒜类',
              detail: ['韭黄', '蒜苗', '大蒜', '生姜', '大葱', '小葱', '蒜苔', '洋葱', '洋姜'],
            },
            {
              title: '葱姜蒜类',
              detail: ['韭黄', '蒜苗', '大蒜', '生姜', '大葱', '小葱', '蒜苔', '洋葱', '洋姜'],
            },
            {
              title: '葱姜蒜类',
              detail: ['韭黄', '蒜苗', '大蒜', '生姜', '大葱', '小葱', '蒜苔', '洋葱', '洋姜'],
            },
          ],
        },
      ],
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
  components: {},
};
</script>

<style lang="less" scoped>
@color: #01c55e;

.home {
  width: 80%;
  margin: 0 auto;
}

header {
  display: flex;
  margin: 50px auto 0;
  justify-content: space-around;

  .logo {
    width: 200px;
  }

  .search {
    flex: 2;
    display: flex;
    margin: auto;
    justify-content: center;
    input {
      height: 40px;
      width: 60%;
      line-height: 40px;
      padding-left: 10px;
      margin: 20px 0;
      border-radius: 5px;
      outline: @color;
      border: 2px solid @color;
    }

    .search_submit {
      width: 100px;
      height: 40px;
      color: #fff;
      text-align: center;
      background: @color;
      line-height: 40px;
      margin: 20px 0;
      border-radius: 5px;
    }
  }

  .shopping_cart {
    width: 200px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    margin: 20px auto;
    background: #f9f9f9;
    border: 1px solid #666;
    position: relative;
    .b-icon {
      margin: 0 10px;
    }

    .shopping-badge {
      position: absolute;
      top: -5px;
      right: -5px;
      width: 15px;
      height: 20px;
      color: #fff;
      font-size: 13px;
      line-height: 20px;
      border-radius: 10px;
      background: red;
    }
  }
}

// 优势
.odds {
  display: flex;
  height: 100px;
  align-items: center;
  background: #f0f0f8;

  .odds_info {
    flex: 1;

    .title {
      font-weight: 600;
    }
  }
}

// main
.main {
  width: 100%;
  display: flex;
  margin: 20px auto;

  .sort {
    .fresh {
      display: flex;
      padding: 10px;
      text-align: left;

      img {
        width: 30px;
        height: 30px;
      }

      div {
        padding-left: 20px;

        h5 {
          margin: 0 10px;
        }

        span {
          font-size: 10px;
          margin: 0 10px;
        }
      }
    }
  }

  .banner {
    #carousel-1 {
      width: 600px;
      height: 345px;
    }
    .activity {
      display: flex;
      justify-content: space-around;
      img {
        margin: 10px auto;
      }
    }
  }

  .user_info {
    flex: 1;
    padding: 10px;
    h5 {
      margin: 20px auto;
    }

    .log_in {
      width: 100%;
      display: flex;
      justify-content: space-around;

      div {
        flex: 1;
        margin: 20px 10px;
        color: #fff;
        text-align: center;
        height: 40px;
        line-height: 40px;
      }

      .login {
        background-color: @color;
      }

      .register {
        color: @color;
        border: 2px solid @color;
      }
    }

    .line {
      width: 100%;
      height: 1px;
      background: #eee;
    }

    .service {
      display: flex;
      justify-content: space-between;

      .buyer {
        flex: 1;
        height: 50px;
        line-height: 50px;
        margin: 0 20px;
        font-weight: 600;
        font-size: 14px;
        cursor: pointer;
        border-bottom: 2px solid @color;
      }

      .seller {
        flex: 1;
        height: 50px;
        font-weight: 600;
        line-height: 50px;
        font-size: 14px;
        cursor: pointer;
      }
    }

    .service_sort {
      display: flex;
      font-size: 13px;
      justify-content: space-around;

      svg {
        padding: 15px;
        margin: 20px auto 10px;
        border-radius: 5px;
        border: 1px solid #ddd;
      }
    }

    .init {
      color: @color;
      cursor: pointer;
      line-height: 50px;
      text-align: center;
    }
  }
}

.hot_supply {
  padding: 15px;

  h4 {
    font-weight: 600;
    text-align: left;
  }

  .sort_item {
    display: flex;
    .head {
      width: 145px;
      height: 320px;
      text-align: left;
      padding: 12px;
      background-size: 100%;
      position: relative;

      h5 {
        font-size: 20px;
        margin-top: 20px;
      }

      p {
        font-size: 14px;
      }

      .block {
        width: 5px;
        height: 20px;
        top: 35px;
        left: 0;
        position: absolute;
      }
    }

    .sort_detail {
      display: flex;
      width: 60%;
      flex-wrap: wrap;
      .item {
        width: 50%;
        text-align: left;
        padding: 10px 20px;
        p {
          font-weight: 600;
        }

        div {
          width: 70%;
        }

        span {
          font-size: 12px;
          cursor: pointer;
          padding-right: 18px;
        }
      }
    }

    .recommendation {
      width: 30%;
      .title {
        position: relative;
        font-weight: 600;
        width: 30%;
      }

      .title::before {
        content: '';
        width: 5px;
        height: 24px;
        display: inline-block;
        position: absolute;
        left: 10px;
        background-color: @color;
      }

      .recommendation_info {
        display: flex;
      }

      .item {
        width: 46%;
        margin: 10px 1%;
        display: inline-block;

        img {
          width: 100%;
        }

        .shops-price-bg {
          display: flex;
          margin: 10px auto;
          justify-content: space-between;
        }

        .price {
          color: red;
        }

        .turnover {
          color: #bbb;
          font-size: 14px;
        }

        .title-field {
          .one-line {
            display: flex;
            font-size: 12px;
            .title-tag {
              color: #fff;
              width: 40px;
              background: red;
            }

            span {
              overflow: hidden; //超出的文本隐藏
              text-overflow: ellipsis; //溢出用省略号显示
              white-space: nowrap; //溢出不换行
            }
          }

          .cw-tag {
            width: 50%;
            font-size: 12px;
            background: #eff4fb;
            border: 1px solid #8a9fcc;
            color: #4869af;
            border-radius: 4px;
            margin: 5px;
          }
        }

        .honor_tag {
          display: flex;
          img:nth-child(1) {
            width: 30px;
            height: 12px;
          }
          img:nth-child(2) {
            width: 30px;
            height: 12px;
          }
          img:nth-child(3) {
            width: 12px;
            height: 12px;
          }
          img:nth-child(4) {
            width: 12px;
            height: 12px;
          }
        }
      }
    }
  }
}

// 行业资讯
.news {
  padding: 15px;
  h4 {
    font-weight: 600;
    text-align: left;
  }

  .content {
    display: flex;

    .banner {
      #carousel-1 {
        width: 500px;
        height: 280px;
      }
      .activity {
        display: flex;
        justify-content: space-around;
        img {
          margin: 10px auto;
        }
      }
    }

    .news_list {
      width: 30%;
    }

    .news_sort {
      position: relative;
      font-weight: 600;
      width: 30%;
    }

    .news_sort::before {
      content: '';
      width: 5px;
      height: 24px;
      display: inline-block;
      position: absolute;
      left: 10px;
      background-color: @color;
    }

    .news_item {
      display: flex;
      //   justify-content: center;
      align-items: center;
      text-decoration: none;
      color: #000;
      margin: 6px auto;
      transition: all 0.3s;
      text-align: left;
      padding-left: 10px;
      div {
        overflow: hidden; //超出的文本隐藏
        text-overflow: ellipsis; //溢出用省略号显示
        white-space: nowrap; //溢出不换行
      }
      .point {
        height: 4px;
        width: 4px;
        background: #cbcbcb;
        margin-right: 11px;
      }

      span:nth-child(1) {
        font-size: 14px;
        overflow: hidden; //超出的文本隐藏
        text-overflow: ellipsis; //溢出用省略号显示
        white-space: nowrap; //溢出不换行
      }
    }

    .news_item:hover {
      color: @color;
    }

    .new_news_item {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
