/* eslint-disable global-require */
import nvd3Vis from './nvd3_vis';

// You ***should*** use these to reference viz_types in code
export const VIZ_TYPES = {
  area: 'area',
  bar: 'bar',
  big_number: 'big_number',
  big_number_total: 'big_number_total',
  box_plot: 'box_plot',
  bubble: 'bubble',
  bullet: 'bullet',
  cal_heatmap: 'cal_heatmap',
  compare: 'compare',
  directed_force: 'directed_force',
  chord: 'chord',
  dist_bar: 'dist_bar',
  filter_box: 'filter_box',
  gantt: 'gantt',
  heatmap: 'heatmap',
  histogram: 'histogram',
  horizon: 'horizon',
  iframe: 'iframe',
  line: 'line',
  mapbox: 'mapbox',
  markup: 'markup',
  para: 'para',
  pie: 'pie',
  pivot_table: 'pivot_table',
  sankey: 'sankey',
  separator: 'separator',
  sunburst: 'sunburst',
  table: 'table',
  time_table: 'time_table',
  time_pivot: 'time_pivot',
  treemap: 'treemap',
  country_map: 'country_map',
  word_cloud: 'word_cloud',
  world_map: 'world_map',
  dual_line: 'dual_line',
  event_flow: 'event_flow',
  paired_ttest: 'paired_ttest',
  partition: 'partition',
  deck_scatter: 'deck_scatter',
  deck_screengrid: 'deck_screengrid',
  deck_grid: 'deck_grid',
  deck_hex: 'deck_hex',
  deck_path: 'deck_path',
  deck_geojson: 'deck_geojson',
  deck_multi: 'deck_multi',
  deck_arc: 'deck_arc',
  deck_polygon: 'deck_polygon',
  rose: 'rose',
};

const vizMap = {
  [VIZ_TYPES.area]: nvd3Vis,
  [VIZ_TYPES.bar]: nvd3Vis,
  [VIZ_TYPES.big_number]: require('./big_number.js'),
  [VIZ_TYPES.big_number_total]: require('./big_number.js'),
  [VIZ_TYPES.box_plot]: nvd3Vis,
  [VIZ_TYPES.bubble]: nvd3Vis,
  [VIZ_TYPES.bullet]: nvd3Vis,
  [VIZ_TYPES.cal_heatmap]: require('./cal_heatmap.js'),
  [VIZ_TYPES.compare]: nvd3Vis,
  [VIZ_TYPES.directed_force]: require('./directed_force.js'),
  [VIZ_TYPES.chord]: require('./chord.jsx'),
  [VIZ_TYPES.dist_bar]: nvd3Vis,
  [VIZ_TYPES.filter_box]: require('./filter_box.jsx'),
  [VIZ_TYPES.gantt]: require('./gantt.js'),
  [VIZ_TYPES.heatmap]: require('./heatmap.js'),
  [VIZ_TYPES.histogram]: require('./histogram.js'),
  [VIZ_TYPES.horizon]: require('./horizon.js'),
  [VIZ_TYPES.iframe]: require('./iframe.js'),
  [VIZ_TYPES.line]: nvd3Vis,
  [VIZ_TYPES.time_pivot]: nvd3Vis,
  [VIZ_TYPES.mapbox]: require('./mapbox.jsx'),
  [VIZ_TYPES.markup]: require('./markup.js'),
  [VIZ_TYPES.para]: require('./parallel_coordinates.js'),
  [VIZ_TYPES.pie]: nvd3Vis,
  [VIZ_TYPES.pivot_table]: require('./pivot_table.js'),
  [VIZ_TYPES.sankey]: require('./sankey.js'),
  [VIZ_TYPES.separator]: require('./markup.js'),
  [VIZ_TYPES.sunburst]: require('./sunburst.js'),
  [VIZ_TYPES.table]: require('./table.js'),
  [VIZ_TYPES.time_table]: require('./time_table.jsx'),
  [VIZ_TYPES.treemap]: require('./treemap.js'),
  [VIZ_TYPES.country_map]: require('./country_map.js'),
  [VIZ_TYPES.word_cloud]: require('./word_cloud.js'),
  [VIZ_TYPES.world_map]: require('./world_map.js'),
  [VIZ_TYPES.dual_line]: nvd3Vis,
  [VIZ_TYPES.event_flow]: require('./EventFlow.jsx'),
  [VIZ_TYPES.paired_ttest]: require('./paired_ttest.jsx'),
  [VIZ_TYPES.partition]: require('./partition.js'),
  [VIZ_TYPES.deck_scatter]: require('./deckgl/layers/scatter.jsx').default,
  [VIZ_TYPES.deck_screengrid]: require('./deckgl/layers/screengrid.jsx').default,
  [VIZ_TYPES.deck_grid]: require('./deckgl/layers/grid.jsx').default,
  [VIZ_TYPES.deck_hex]: require('./deckgl/layers/hex.jsx').default,
  [VIZ_TYPES.deck_path]: require('./deckgl/layers/path.jsx').default,
  [VIZ_TYPES.deck_geojson]: require('./deckgl/layers/geojson.jsx').default,
  [VIZ_TYPES.deck_arc]: require('./deckgl/layers/arc.jsx').default,
  [VIZ_TYPES.deck_polygon]: require('./deckgl/layers/polygon.jsx').default,
  [VIZ_TYPES.deck_multi]: require('./deckgl/multi.jsx'),
  [VIZ_TYPES.rose]: require('./rose.js'),
};
export default vizMap;
