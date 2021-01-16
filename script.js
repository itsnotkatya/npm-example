const chalk = require("chalk");
const log = console.log;

log(
    chalk.red("Строка красного цвета\n") +
    chalk.green("Строка зеленого цвета\n") +
    chalk.blue("Строка синего цвета")
);

// шаблонные литералы
const os = require("os");

log(`
	Total memory: ${chalk.blue(os.totalmem())} bytes
	Free memory: ${chalk.green(os.freemem())} bytes
	Memory used: ${chalk.red(os.totalmem() - os.freemem())} bytes
`);

// тегированные шаблонные литералы
const v8 = require("v8");

const {
    total_heap_size: total,
    used_heap_size: used,
    heap_size_limit: limit,
} = v8.getHeapStatistics();

log(chalk`
	Heap Size Limit: {rgb(0, 0, 255) ${limit}}
	Total Heap Size: {hex('#008000') ${total}}
	Used Heap Size: {red ${used}}
`);