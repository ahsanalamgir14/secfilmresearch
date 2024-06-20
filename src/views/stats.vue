<!-- <template>
  <v-card>
    <v-card-text :class="{
        'px-0 ': $vuetify.breakpoint.smAndDown,
        'pa-12': $vuetify.breakpoint.mdAndUp,
      }">
      <v-chart class="chart" :option="option" />
    </v-card-text>
   
  </v-card>
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart from "vue-echarts";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

export default {
  components: {
    VChart,
  },
  data() {
    return {
      option: {
        title: {
          text: "Our Traffic Sources",
          left: "center",
        },
        tooltip: {
          trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)",
          },
        legend: {
          orient: "vertical",
          left: "left",
          data: [
            "Direct",
            "Email",
            "Ad Networks",
            "Video Ads",
            "Search Engines",
          ],
        },
        series: [
          {
            name: "Traffic Sources",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "Direct" },
              { value: 310, name: "Email" },
              { value: 234, name: "Ad Networks" },
              { value: 135, name: "Video Ads" },
              { value: 1548, name: "Search Engines" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.chart {
  height: 400px;
}
</style> -->

<template>
  <div>
    <b-container style="margin-left: 0px; margin-top: 0px">
      <b-row>
        <b-col cols="1" class="d-flex align-items-center">
          <b-dropdown
            variant="primary"
            class="ml-4 mt-2"
            size="md"
            style="border-radius: 0.375rem"
          >
            <template #button-content>
              <div class="d-flex align-items-center" @click="filter()">
                <b-icon icon="filter" size="sm"></b-icon>
                Filter
              </div>
            </template>

            <div class="dropdown-scrollable">
              <b-dropdown-item
                v-for="(item, index) in snvfilterLabels"
                :key="index"
                @click="openFilter(item)"
              >
                {{ item.label }}
              </b-dropdown-item>
            </div>
          </b-dropdown>
        </b-col>
        <b-col cols="11">
          <b-row>
            <b-col cols="12">
              <div class="filter-container">
                <div class="filter-items">
                  <b-col
                    v-for="(selectedItem, index) in selectedItems"
                    :key="index"
                    class="filter-criteria"
                  >
                    <div v-if="selectedItem.isInputMode">
                      <b-row style="width: max-content">
                        <label class="mt-2"
                          ><strong>{{ selectedItem.label }}</strong
                          >:&nbsp;</label
                        >
                        <div v-if="selectedItem.filter.type == 'text'">
                          <b-row>
                            <b-form-input
                              type="text"
                              placeholder="Select an option"
                              @keyup.enter="selectOption(selectedItem)"
                              v-model="selectedItem.selectedOption"
                              style="width: 200px"
                            ></b-form-input
                            ><b-icon
                              class="mt-2 ml-2"
                              icon="x-circle"
                              @click="removeItem(selectedItem)"
                            ></b-icon>
                            ></b-row
                          >
                        </div>
                        <div v-if="selectedItem.filter.type == 'Date'">
                          <b-form-datepicker
                            id="datepicker-dateformat2"
                            :date-format-options="{
                              year: 'numeric',
                              month: 'numeric',
                              day: 'numeric',
                            }"
                            locale="en"
                            @input="selectOption(selectedItem)"
                            v-model="selectedItem.selectedOption"
                          ></b-form-datepicker>
                        </div>
                        <div v-if="selectedItem.filter.type == 'single_select'">
                          <form>
                            <select
                              name="singleselect"
                              id="singleselect"
                              size="md"
                              @change="
                                selectSingleOption(
                                  selectedItem,
                                  $event.target.value
                                )
                              "
                            >
                              <option value="">Select Option</option>
                              <option
                                v-for="option in selectedItem.filter.options"
                                :key="option"
                                :value="option"
                              >
                                {{ option }}
                              </option>
                            </select>
                            <b-icon
                              class="mt-2 ml-2"
                              icon="x-circle"
                              @click="removeItem(selectedItem)"
                            ></b-icon>
                          </form>
                        </div>
                        <div v-if="selectedItem.filter.type == 'slider'">
                          <b-row>
                            <b class="ml-2"
                              >({{ selectedItem.selectedOption }})</b
                            >
                            <b-form-input
                              type="range"
                              :min="0"
                              :max="20"
                              @keyup.enter="selectOption(selectedItem)"
                              v-model="selectedItem.selectedOption"
                            />
                            <b-icon
                              class="mt-2 ml-2"
                              icon="x-circle"
                              @click="removeItem(selectedItem)"
                            ></b-icon>
                          </b-row>
                        </div>
                        <div v-if="selectedItem.filter.type == 'multiselect'">
                          <b-dropdown
                            text="Select options"
                            class="m-2 dropdown-fixed"
                            right
                            ref="dropdown"
                          >
                            <div
                              class="dropdown-scrollable"
                              style="z-index: 1100"
                            >
                              <!-- Ensure dropdown-scrollable is positioned absolutely -->
                              <b-dropdown-item-button
                                v-for="option in selectedItem.filter.options"
                                :key="option"
                              >
                                <b-form-checkbox
                                  :value="option"
                                  v-model="selectedItem.selectedOption"
                                  @change="selectOption(selectedItem)"
                                >
                                  {{ option }}
                                </b-form-checkbox>
                              </b-dropdown-item-button>
                            </div>
                          </b-dropdown>
                          <b-icon
                            icon="x-circle"
                            @click="removeItem(selectedItem)"
                          ></b-icon>
                        </div>

                        <div v-if="selectedItem.filter.type == 'range'">
                          <b-row>
                            <b-form-input
                              type="number"
                              placeholder="Min"
                              @keyup.enter="selectOption(selectedItem)"
                              v-model="selectedItem.selectedOption.min"
                              style="width: 100px"
                            ></b-form-input>
                            {{ " - " }}
                            <b-form-input
                              type="number"
                              placeholder="Max"
                              @keyup.enter="selectOption(selectedItem)"
                              v-model="selectedItem.selectedOption.max"
                              style="width: 100px"
                            ></b-form-input>
                            <b-icon
                              class="mt-2"
                              icon="x-circle"
                              @click="removeItem(selectedItem)"
                            ></b-icon>
                          </b-row>
                        </div>
                      </b-row>
                    </div>
                    <div v-else>
                      <label
                        style="border-radius: 5px; width: max-content"
                        class="mt-2"
                        :class="{
                          'selected-label': selectedItem.isLabelSelected,
                        }"
                        ><strong>{{ selectedItem.label }}</strong
                        >:&nbsp;
                        <span
                          v-if="
                            typeof selectedItem.selectedOption === 'object' &&
                            selectedItem.filter.type != 'range'
                          "
                        >
                          {{ selectedItem.selectedOption.join(", ") }}
                        </span>
                        <span v-else>
                          {{
                            JSON.stringify(selectedItem.selectedOption)
                              .slice(1, -1)
                              .replace(/"/g, "")
                          }}
                        </span>
                        <b-icon-pencil-square
                          style="width: 25px"
                          :class="{
                            'selected-label': selectedItem.isLabelSelected,
                          }"
                          @click="toggleInputMode(selectedItem)"
                        ></b-icon-pencil-square>
                        <b-icon-x-circle
                          style="width: 25px"
                          :class="{
                            'selected-label': selectedItem.isLabelSelected,
                          }"
                          @click="removeItem(selectedItem)"
                        ></b-icon-x-circle>
                      </label>
                    </div>
                  </b-col>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import snv from "./snv.json";
// import cnv from "./cnv.json";
// import sv from "./sv.json";

export default {
  data() {
    return {
      snvfilterLabels: [],
      cnvfilterLabels: [],
      svfilterLabels: [],
      selectedItems: [],
      searchText: {},
      vafValue: [0.005, 1],
      selectedOptions: [],
      selectedFilters: {},
      isChecked: false,
    };
  },
  props: {
    type: String,
  },
  components: {},
  methods: {
    selectOption(selectedItem) {
      selectedItem.isLabelSelected = true;
      selectedItem.isInputMode = false;
      this.logSelectedOptions();
    },
    selectSingleOption(selectedItem, selectedOption) {
      console.log(selectedItem.selectedOption);
      selectedItem.selectedOption = selectedOption;
      this.selectOption(selectedItem);
    },
    toggleInputMode(selectedItem) {
      selectedItem.isInputMode = true;
      selectedItem.isLabelSelected = false;
    },
    removeItem(item) {
      const index = this.selectedItems.indexOf(item);
      if (index !== -1) {
        this.selectedItems.splice(index, 1);
      }
      this.logSelectedOptions();
    },
    filter() {
      console.log(this.type);
      this.snvfilterLabels = [];
      // if ((this.type = snv)) {
        // console.log(snv);
        snv.SNV.columns.forEach((column) => this.snvfilterLabels.push(column));
      // }
      // if ((this.type = cnv)) {
      //   cnv.CNV.columns.forEach((column) => this.cnvfilterLabels.push(column));
      // }
      // if ((this.type = sv)) {
      //   sv.SV.columns.forEach((column) => this.svfilterLabels.push(column));
      // }
    },
    getLabel(selectedItem) {
      const item = this.filterLabels.find(
        (filterItem) => filterItem.key === selectedItem.key
      );
      return item ? item.label : selectedItem.label;
    },
    openFilter(item) {
      console.log(item);
      const itemIndex = this.selectedItems.findIndex(
        (selectedItem) => selectedItem.key === item.key
      );
      if (itemIndex !== -1) {
        alert("Filter with key " + this.getLabel(item) + " already exists");
      } else {
        let hasDefault = item.filter.default && item.filter.default.length > 0;
        let selectedOption = null;
        if (item.filter.type == "range") {
          selectedOption = { min: null, max: null };
        } else if (
          item.filter.type == "text" ||
          item.filter.type == "slider" ||
          item.filter.type == "Date"
        ) {
          selectedOption = null;
        } else if (item.filter.type == "single_select") {
          selectedOption = "";
        } else {
          selectedOption = hasDefault
            ? item.filter.default
            : this.selectedOptions;
        }
        this.selectedItems.push({
          ...item,
          selectedOption: selectedOption,
          isInputMode: !hasDefault,
          isLabelSelected: hasDefault,
        });
      }
      this.logSelectedOptions();
    },
    logSelectedOptions() {
      this.selectedFilters = this.selectedItems.reduce((acc, item) => {
        acc[item.key] = item.selectedOption;
        return acc;
      }, {});
      console.log("Selected Options:", this.selectedFilters);
      this.$emit("selectedFilters", this.selectedFilters);
    },
  },
  mounted() {
    this.type;
    console.log(this.type, "filters");
  },
};
</script>

<style scoped>
.selected-label {
  background-color: blue;
  color: white;
  padding: 2px 4px;
}
#ex1RangePicker .rangepicker-selection {
  background: blue;
}

.filter-container {
  display: flex;
  flex-wrap: nowrap;
overflow-x:auto;
  position: relative;
  /* Ensure absolute positioning of dropdown within this container */
}

.filter-items {
  display: flex;
  flex-wrap: nowrap;
}

.dropdown-scrollable {
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  top: 100%; /* Position below the filter button */
  left: 0; /* Align with the left edge of the container */
  z-index: 1100; /* Higher than the z-index of other conflicting elements */
  background-color: white;
  /* Adjust other necessary styles */
}

.dropdown-fixed {
  z-index: 1050;
}
</style>