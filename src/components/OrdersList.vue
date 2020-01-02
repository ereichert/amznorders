<template>
  <div>
    <div id="order-list-search-section">
      <label for="orders-list-search-box">Orders List Search</label>
      <input
        type="text"
        id="orders-list-search-box"
        @keyup="searchOrders"
        v-model="searchInput"
        placeholder="Search params"
        v-hotkeybinding.focus="'g s'"
      />
    </div>
    <div id="order-list">
      <div v-for="(order, idx) in orderList" v-bind:key="`order.orderId-${idx}`"
           :class="{
            'order-row': true,
            'odd-order-row': (idx % 2 === 0)
         }"
      >
        <div class="order-cell">{{ order.totalCharged }}</div>
        <div class="order-cell"><a :href="order.orderURL">{{ order.orderId }}</a></div>
        <div class="order-cell">{{ order.shipmentDate }}</div>
        <div class="order-cell">{{ order.paymentInstrumentType }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component, Emit, Prop, Vue,
} from 'vue-property-decorator';
import Order from '../models/Order';
import { hotkeybinding } from '@/directives/HotkeyBindings';

@Component({
  directives: { hotkeybinding },
})
export default class OrderList extends Vue {
  @Prop({ default: [] })
  private orderList!: Array<Order>;

  private originalOrderList!: Array<Order>;

  private searchInput: string = '';

  @Emit('newOrders')
  searchOrders(): Array<Order> {
    let newOrdersArray: Array<Order>;
    if (!this.originalOrderList || this.originalOrderList.length === 0) {
      this.originalOrderList = this.orderList;
    }
    if (this.searchInput === '') {
      newOrdersArray = this.originalOrderList;
      this.originalOrderList = [];
    } else {
      const totalSearchParam = `$${this.searchInput}`;
      newOrdersArray = this.originalOrderList
        .filter(order => this.isTotalCharged(totalSearchParam, order.totalCharged)
          || this.isOrderId(this.searchInput, order.orderId));
    }
    return newOrdersArray;
  }

  private isTotalCharged = (searchParam: string, totalCharged: string)
    : boolean => this.isMatch(searchParam, totalCharged);

  private isOrderId = (searchParam: string, orderId: string)
    : boolean => this.isMatch(searchParam, orderId);

  private isMatch = (searchParam: string, stringOfInterest: string): boolean => {
    let result = false;
    if (stringOfInterest) {
      result = stringOfInterest.startsWith(searchParam);
    }

    return result;
  }
}
</script>

<style scoped>
  #order-list-search-section{
    float: right;
    margin-bottom: 10px;
  }
  label{
    font-weight: bold;
    margin-right: 10px;
    padding-bottom: 0;
    vertical-align: bottom;
  }
  input{
    border: solid black 1px;
    width: 300px;
    height: 20px;
  }
  #order-list{
    display: table;
    width: 100%;
  }
  .order-row{
    display: table-row;
  }
  .odd-order-row{
    background: lightgray;
  }
  .order-cell{
    display: table-cell;
  }
</style>
