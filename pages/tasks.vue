<template>
  <div class="container">
    <div class="columns">
      <div class="column is-narrow">
        <div style="width:200px;height:200px;overflow:hidden;border-radius:4px">
          <img src="~/assets/img/pixcai.jpeg" alt="avatar">
        </div>
      </div>
      <div class="column">
        <div class="tabs is-boxed">
          <ul>
            <li class="is-active"><a>项目概览</a></li>
            <li><a>我的任务</a></li>
            <li><a>团队成员</a></li>
            <li><a>日程计划</a></li>
          </ul>
        </div>
        <table class="table is-bordered is-striped is-fullwidth">
          <thead>
            <tr>
              <th>序号</th>
              <th>名称</th>
              <th>描述</th>
              <th>作者</th>
              <th>状态</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2017101900000001</td>
              <td>开发表格</td>
              <td>完成表格展示功能</td>
              <td>小猪</td>
              <td>
                <button class="button is-primary">未开始</button>
              </td>
            </tr>
            <tr>
              <td>2017101900000002</td>
              <td>开发表格</td>
              <td>完成表格展示功能</td>
              <td>小猪</td>
              <td>
                <button class="button is-info">进行中</button>
              </td>
            </tr>
            <tr>
              <td>2017101900000002</td>
              <td>开发表格</td>
              <td>完成表格展示功能</td>
              <td>小猪</td>
              <td>
                <button class="button is-success">已完成</button>
              </td>
            </tr>
            <tr>
              <td>2017101900000002</td>
              <td>开发表格</td>
              <td>完成表格展示功能</td>
              <td>小猪</td>
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
