

export interface StatisticArray {
    'name': StatisticsObject

}
export interface StatisticsObject {
    statistics?: (StatisticsEntity)[] | null;
}
export interface StatisticsEntity {
    type: string;
    home: string;
    away: string;
}


export interface stat {
    name: { statistic: StatisticsEntity[] }
}