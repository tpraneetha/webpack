const { transform } = require("@babel/core")

module.exports={
    transform:{
        '^.+\\.jsx?$': "babel-jest"
      },transformIgnorePatterns: ["/node_modules/(?!vue-awesome)"],
}