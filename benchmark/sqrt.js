const Benchmark = require('benchmark')
const { benchmarkConfig } = require('../config')

const benchmark = new Benchmark(
  'test Sqrt',
  () => {
    for (let i = 0; i < 100000; i++) {
      Math.sqrt(Math.random())
    }
  },
  benchmarkConfig
)

benchmark.on('complete', function() {
  console.log(this)
})

benchmark.run()
