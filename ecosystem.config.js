module.exports = {
  apps : [{
    name: 'CCXT Rest API',
    script : "npm",
    args : "start",
    watch: false,
    instances : 1,
    exec_mode : "cluster",
    out_file : "/dev/null",
    error_file : "/dev/null"
  }],
};
