import { Column, Row } from '../components/chart-base/chart-base.component';
import { Formatter } from '../types/formatter';

export function createDataTable(
  data: Row[] | undefined,
  columns?: Column[],
  formatters?: Formatter[]
): google.visualization.DataTable | undefined {
  if (data == null) {
    return undefined;
  }

  let firstRowIsData = true;
  if (columns != null) {
    firstRowIsData = false;
  }

  const dataTable = google.visualization.arrayToDataTable(getDataAsTable(data, columns), firstRowIsData);
  if (formatters) {
    applyFormatters(dataTable, formatters);
  }

  return dataTable;
}

function getDataAsTable(data: Row[], columns: Column[] | undefined): (Row | Column[])[] {
  if (columns) {
    return [columns, ...data];
  } else {
    return data;
  }
}

function applyFormatters(dataTable: google.visualization.DataTable, formatters: Formatter[]): void {
  for (const val of formatters) {
    val.formatter.format(dataTable, val.colIndex);
  }
}
