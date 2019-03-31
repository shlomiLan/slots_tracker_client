<template>
  <div class="container">
    <!--<loading :loading=loading></loading>-->
    <div class="row">
      <div class="col-sm-10">
        <!--<alert :message=message></alert>-->
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
// import Alert from './Alert';
// import Loading from './Loading';
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
      loading: true,
    };
  },
  components: {
    // alert: Alert,
    // loading: Loading,
  },
  methods: {
    async getChartData() {
      let res = [];
      try {
        res = await ChartsAPI.get();
        this.charts = res.data;
      } catch (e) {
        this.displayError(e);
      }

      this.loading = false;
      return res;
    },
    displayError(message, type = 'error') {
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
