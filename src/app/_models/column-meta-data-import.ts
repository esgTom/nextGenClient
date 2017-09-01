export class ColumnMetaDataImport {
    TableName: string;
    ColumnName: string;
    ColumnDataType: string;
    ColumnLength: number;
    ColumnDecimalPlaces: number;
    ColumnNullable: boolean;
    ColumnPrimaryKey: boolean;
    ColumnOrdinalPosition: number;

    constructor( tableName: string, columnName: string, columnDataType: string, columnLength: number, columnDecimalPlaces: number,
        columnNullable: boolean, columnPrimaryKey: boolean, columnOrdinalPosition: number
    ) {
        this.TableName = tableName;
        this.ColumnName = columnName;
        this.ColumnDataType = columnDataType;
        this.ColumnLength = columnLength;
        this.ColumnDecimalPlaces = columnDecimalPlaces;
        this.ColumnNullable = columnNullable;
        this.ColumnPrimaryKey = columnPrimaryKey;
        this.ColumnOrdinalPosition = columnOrdinalPosition;

    }
}
