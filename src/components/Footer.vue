<template>
  <div class="footer">
    <div class="content">
      <div class="item">
        <div class="title">购物指南</div>
        <div class="detail">购物流程</div>
        <div class="detail">支付方式</div>
        <div class="detail">售后规则</div>
      </div>
      <div class="item">
        <div class="title">配送方式</div>
        <div class="detail">配送运费</div>
        <div class="detail">配送范围</div>
        <div class="detail">配送时间</div>
      </div>
      <div class="item">
        <div class="title">商家服务</div>
        <div class="detail">平台规则</div>
        <div class="detail">商家入驻</div>
        <div class="detail">联系我们</div>
      </div>
      <div class="item">
        <div class="title">联系我们</div>
        <div class="detail">在线客服</div>
        <div class="detail">客服电话 400-606-3311</div>
        <div class="detail">服务时间 09：00-24：00</div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.footer {
  width: 100%;
  height: 300px;
  margin-top: 20px;
  background: #01c65d;

  .content {
    width: 80%;
    margin: auto;
    display: flex;
    .item {
      flex: 1;

      .title {
        color: #fff;
        font-size: 26px;
        line-height: 80px;
      }

      .detail {
        color: #4beb97;
        line-height: 60px;
      }
    }
  }
}
</style>
