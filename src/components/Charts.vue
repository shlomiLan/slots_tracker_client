<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-10">
        <div v-for='(chart, index) in charts' :key='index'>
          <div v-if="chart.type === 'table'" style="text-align: center;">
            <p v-for='(row, index2) of chart.data' :key='index2'>
              {{row[0]}} - {{row[1]}}
            </p>
          </div>
          <div v-else>
            <vue-chart v-bind:style="'height: 500px'"
                       :data="chart.data"
                       :type="chart.type"
                       :options="chart.options"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from './Alert';
import ChartsAPI from '../api/Charts';

export default {
  data() {
    return {
      charts: [],
      message: {
        text: '',
        type: 'success',
        display: false,
      },
    };
  },
  components: {
    alert: Alert,
  },
  methods: {
    async getChartData() {
      let res = [];
      try {
        res = await ChartsAPI.get();
        const resData = res.data;
        this.charts = resData;
        return resData;
      } catch (e) {
        this.displayError(e);
      }

      return res;
    },
    displayError(message, type = 'danger') {
      // TODO: Fix not displaying second time.
      this.message.display = true;
      this.message.type = type;
      this.message.text = message;
    },
  },
  created() {
    this.getChartData();
  },
};
</script>
