<template>
  <div class="container">
    <div class="columns">
      <div class="column is-narrow">
        <figure>
          <div style="width:200px;height:200px;overflow:hidden;border-radius:4px">
            <img src="~/assets/img/pixcai.jpeg" alt="avatar">
          </div>
          <figcaption>
            <h3 class="title has-text-centered">Xuehua Cai</h3>
            <p class="subtitle has-text-centered">pixcai@163.com</p>
          </figcaption>
        </figure>
      </div>
      <div class="column">
        <div class="tabs is-boxed">
          <ul>
            <li><a>项目概览</a></li>
            <li class="is-active"><a>我的任务</a></li>
            <li><a>我的好友</a></li>
            <li><a>日程计划</a></li>
          </ul>
        </div>
        <div class="tags has-addons">
          <span class="tag">未开始</span>
          <span class="tag is-info">进行中</span>
          <span class="tag">已完成</span>
        </div>
        <table class="table is-fullwidth">
          <tbody>
            <tr>
              <td>2017101900000001</td>
              <td>开发表格</td>
              <td>完成表格展示功能</td>
              <td>
                <button class="button is-primary">未开始</button>
              </td>
            </tr>
            <tr>
              <td>2017101900000002</td>
              <td>开发表格</td>
              <td>完成表格展示功能</td>
              <td>
                <button class="button is-info">进行中</button>
              </td>
            </tr>
            <tr>
              <td>2017101900000003</td>
              <td>开发表格</td>
              <td>完成表格展示功能</td>
              <td>
                <button class="button is-success">已完成</button>
              </td>
            </tr>
            <tr>
              <td>2017101900000004</td>
              <td>开发表格</td>
              <td>完成表格展示功能</td>
              <td>
                <button class="button is-warning">改进中</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
