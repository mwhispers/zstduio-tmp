<template>
  <div class="wrapper">
    <Left class="left"></Left>
    <div class="right">
      <div class="breadcrumb-wrapper">
        <Breadcrumb separator=">">
          <BreadcrumbItem>算子</BreadcrumbItem>
          <BreadcrumbItem>算子列表</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div class="button-wrapper">
        <Button type="primary" class="publish-button">算子发布</Button>
      </div>
      <Divider></Divider>
      <Table :columns="columns" :data="data" class="table" border>
          <template slot="action" slot-scope="{row}">
              <Button type="warning" size="small" style="margin-right:5px" @click="toggle(row.id)">冻结</Button>
              <Button type="error" size="small" @click="deleted(row.id)">删除</Button>
          </template>
      </Table>
      <Page :total="100" style="margin-top:20px" @on-change="changePage()"></Page>
    </div>
  </div>
</template>
<script>
import Left from "../components/Left.vue";
export default {
  components: {
    Left
  },
  data() {
    return {
      columns: [
        {
          title: '算子名称',
          key: 'name'
        },
        {
          title: '状态',
          key: 'status'
        },
        {
          title: '发布时间',
          key: 'time'
        },
        {
          title: '发布人',
          key: 'person'
        },
        {
          title: '操作',
          slot:'action',
          align:'center'
        }
      ],
      data:[
          {
              id:1,
              name:'alg1',
              status:'active',
              time:'2020/2/21 15:07',
              person:'lwx829762'
          }
      ]
    };
  },
  methods:{
    //删除
    deleted(id){
      console.log("delete " + id);
    },
    //冻结或者激活
    toggle(id){
      console.log("toggle " + id);
    },
    //换页
    changePage(){
      console.log(arguments);
    }
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  display: flex;
}
.left {
  flex-shrink: 0;
}
.breadcrumb-wrapper {
  display: flex;
}
.button-wrapper {
  display: flex;
  flex-direction: row-reverse;
}
.right {
  flex-grow: 1;
  margin-left: 48px;
  margin-right: 48px;
  margin-top: 24px;
}
</style>