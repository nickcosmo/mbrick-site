<template>
  <v-row>
    <v-col cols="12 ma-0 pa-0">
      <v-img
        max-height="300"
        class="d-flex justify-center align-center text-center text-sm-h1 text-h2"
        gradient="to bottom, rgba(0, 0, 0, 0), 10%, #121212"
        :src="require('@/static/brick-hero-alt.jpg')"
      >
        PATENTS
      </v-img>
    </v-col>
    <v-row justify="center">
      <v-col cols="12">
        <v-col class="col-md-5 col-10 mx-auto">
          <v-card
            outlined
            cols="3"
            class="mb-3"
            style="background-color: #121212"
          >
            <v-card-title class="justify-center">
              Running Bond Compression Design
            </v-card-title>
          </v-card>
          <v-simple-table dense>
            <thead>
              <tr>
                <th class="text-left">Liner Number</th>
                <th class="text-left">Patent</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in runningBondPatents" :key="item.linerNumber">
                <td>{{ item.linerNumber }}</td>
                <td>{{ item.patentNumber }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-col>
      </v-col>
      <v-col cols="12">
        <v-col class="col-md-5 col-10 mx-auto">
          <v-card
            outlined
            cols="3"
            class="mb-3"
            style="background-color: #121212"
          >
            <v-card-title class="justify-center">
              Stack Bond Compression Design
            </v-card-title>
          </v-card>
          <v-simple-table dense>
            <thead>
              <tr>
                <th class="text-left">Liner Number</th>
                <th class="text-left">Patent</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in stackBondPatents" :key="item.linerNumber">
                <td>{{ item.linerNumber }}</td>
                <td>{{ item.patentNumber }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-col>
      </v-col>
      <v-col cols="12">
        <v-col class="col-md-5 col-10 mx-auto">
          <v-card
            outlined
            cols="3"
            class="mb-3"
            style="background-color: #121212"
          >
            <v-card-title class="justify-center">
              Sliding Connection Patents
            </v-card-title>
          </v-card>
          <v-simple-table dense>
            <thead>
              <tr>
                <th class="text-left">Liner Number</th>
                <th class="text-left">Patent</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in slidingConnectionPatents"
                :key="item.linerNumber"
              >
                <td>{{ item.linerNumber }}</td>
                <td>{{ item.patentNumber }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-col>
      </v-col>
      <v-col cols="12" class="mb-3">
        <v-col class="col-md-5 col-10 mx-auto">
          <v-card
            outlined
            cols="3"
            class="mb-3"
            style="background-color: #121212"
          >
            <v-card-title class="justify-center">
              Metric Running Bond Patents
            </v-card-title>
          </v-card>
          <v-simple-table dense>
            <thead>
              <tr>
                <th class="text-left">Liner Number</th>
                <th class="text-left">Patent</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in metricRunningBondPatents"
                :key="item.linerNumber"
              >
                <td>{{ item.linerNumber }}</td>
                <td>{{ item.patentNumber }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-col>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      runningBondPatents: [
        {
          linerNumber: "110.03",
          patentNumber: "D675,346",
        },
        {
          linerNumber: "110.04",
          patentNumber: "D675,346",
        },
        {
          linerNumber: "110.05",
          patentNumber: "D675,346",
        },
        {
          linerNumber: "110.06",
          patentNumber: "D675,346",
        },
        {
          linerNumber: "110.07",
          patentNumber: "D675,346",
        },
        {
          linerNumber: "110.07S",
          patentNumber: "D675,346",
        },
        {
          linerNumber: "110.07LF",
          patentNumber: "D675,346",
        },
        {
          linerNumber: "110.08",
          patentNumber: "D675,346",
        },
        {
          linerNumber: "110.09",
          patentNumber: "D675,346",
        },
        {
          linerNumber: "110.011",
          patentNumber: "D675,346",
        },
        {
          linerNumber: "110.0318",
          patentNumber: "D675,346",
        },
        {
          linerNumber: "110.0518",
          patentNumber: "D675,346",
        },
        {
          linerNumber: "110.0608",
          patentNumber: "D675,346",
        },
        {
          linerNumber: "113.0608",
          patentNumber: "D675,346",
        },
        {
          linerNumber: "S100.0015",
          patentNumber: "D675,346",
        },
        {
          linerNumber: "S100.0018",
          patentNumber: "D675,346",
        },
        {
          linerNumber: "S110.01",
          patentNumber: "D675,346",
        },
      ],
      stackBondPatents: [
        {
          linerNumber: "120.01 2X",
          patentNumber: "D674,517",
        },
        {
          linerNumber: "120.01 2XL",
          patentNumber: "D674,517",
        },
        {
          linerNumber: "120.016X",
          patentNumber: "D675,346",
        },
        {
          linerNumber: "120.01 5X",
          patentNumber: "D675,346",
        },
        {
          linerNumber: "120.04",
          patentNumber: "D675,346",
        },
        {
          linerNumber: "120.012",
          patentNumber: "D675,346",
        },
        {
          linerNumber: "120.0509",
          patentNumber: "D675,346",
        },
      ],
      slidingConnectionPatents: [
        {
          linerNumber: "127.01",
          patentNumber: "11041320",
        },
        {
          linerNumber: "127.02",
          patentNumber: "11041320",
        },
        {
          linerNumber: "127.04",
          patentNumber: "11041320",
        },
        {
          linerNumber: "128.01",
          patentNumber: "D674,517",
        },
      ],
      metricRunningBondPatents: [
        {
          linerNumber: "SM 100 T4",
          patentNumber: "D675,346",
        },
        {
          linerNumber: "SM 100 T5",
          patentNumber: "D675,346",
        },
        {
          linerNumber: "SM 100 T6",
          patentNumber: "D675,346",
        },
        {
          linerNumber: "SM 100 T7",
          patentNumber: "D675,346",
        },
        {
          linerNumber: "SM 100 T8",
          patentNumber: "D675,346",
        },
        {
          linerNumber: "SM 100 T9",
          patentNumber: "D675,346",
        },
        {
          linerNumber: "SM 100 T10",
          patentNumber: "D675,346",
        },
        {
          linerNumber: "SM 100 T11",
          patentNumber: "D675,346",
        },
        {
          linerNumber: "SM 100 T12",
          patentNumber: "D675,346",
        },
        {
          linerNumber: "SM 100 T13",
          patentNumber: "D675,346",
        },
        {
          linerNumber: "SM 100 T14",
          patentNumber: "D675,346",
        },
        {
          linerNumber: "SM 100 T15",
          patentNumber: "D675,346",
        },
        {
          linerNumber: "SM 100 T16",
          patentNumber: "D675,346",
        },
        {
          linerNumber: "SM 100 T17",
          patentNumber: "D675,346",
        },
        {
          linerNumber: "SM 100 T18",
          patentNumber: "D675,346",
        },
      ],
    };
  },
};
</script>