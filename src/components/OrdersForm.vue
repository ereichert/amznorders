<template>
  <div id="orders-form">
    <label for="orders-input">Order CSV:</label>
    <div id="errors-section" v-if="hasErrors">
      <div>Errors:</div>
      <ul v-for="(error, idx) in parsingErrors" v-bind:key="idx">
        <li data-testid="parsing-error">{{error}}</li>
      </ul>
    </div>
    <textarea id="orders-input"
        :class="{'error-border': hasErrors}"
        placeholder="Paste order CSV here."
        v-model="ordersCSV"
    />
    <button @click="parseOrders">Load Orders</button>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator';
import Order from '@/models/Order';
import { OrderParsingServices } from '@/services/OrderParsingServices';

@Component
export default class OrdersForm extends Vue {
  ordersCSV: string;

  hasErrors: boolean = false;

  parsingErrors: Array<string> = [];

  constructor() {
    super();
    this.ordersCSV = '';
  }

  @Emit('newOrders')
  parseOrders(): Array<Order> {
    const parsingResult = OrderParsingServices.fromCSV(this.ordersCSV);
    let orders: Array<Order> = [];
    if (parsingResult.hasErrors()) {
      this.hasErrors = true;
      this.parsingErrors = parsingResult.errors;
    } else {
      this.hasErrors = false;
      ({ orders } = parsingResult);
    }
    return orders;
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
  #errors-section{
    color: red;
  }
  .error-border{
    border-color: red;
  }
</style>
