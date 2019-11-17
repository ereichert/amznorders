<template>
  <div id="orders-form">
    <label for="orders-input">Order CSV:</label>
    <textarea id="orders-input" placeholder="Paste order CSV here." v-model="ordersCSV"/>
    <button @click="parseOrders">Load Orders</button>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator';
import Order from '@/models/Order';
import OrderParsingServices from '@/services/OrderParsingServices';

@Component
export default class OrdersForm extends Vue {
  ordersCSV: string;

  constructor() {
    super();
    this.ordersCSV = '';
  }

  @Emit('newOrders')
  parseOrders(): Array<Order> {
    return OrderParsingServices.fromCSV(this.ordersCSV);
  }
}
</script>

<style scoped>
  #orders-form{
    display: block;
    height: 100%;
    text-align: left;
  }
  label{
    display: block;
  }
  textarea{
    display: block;
    width: 100%;
    min-height: 25em;
  }
</style>
