<template>
  <div>
    <h1>Amazon Orders</h1>
    <div id="main-content">
      <OrdersForm id="orders-form" @newOrders="onNewOrders"/>
      <OrderList v-bind:orderList="this.orderList" @newOrders="onNewOrders"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import OrderList from './OrdersList.vue';
import OrdersForm from './OrdersForm.vue';
import Order from '@/models/Order';

@Component({
  components: { OrderList, OrdersForm },
})
export default class Orders extends Vue {
  orderList: Array<Order>;

  constructor() {
    super();
    this.orderList = [];
  }

  onNewOrders(newOrders: Array<Order>): void {
    this.orderList = newOrders;
  }
}
</script>

<style scoped>
  #main-content{
    margin-left: 10%;
    margin-right: 10%;
  }
  #orders-form{
    margin-bottom: 25px;
  }
</style>
