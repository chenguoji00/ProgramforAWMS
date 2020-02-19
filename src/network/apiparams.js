// 配置参数
export const apiparas = {
  pushPara: function(paras, pname, pvalue) {
    let p = {
      name: pname,
      value: pvalue
    };
    paras.push(p);
  },

  getParas_rtype: function(db, rptname, resulttype, rptparas, source) {
    if (source === undefined) {
      source = "h8610";
    } else {
      source = "h8610." + source;
    }

    // let token = Cookie.Get("token");
    let  token = 'B0245B6926E648AA814409E2853CA40E'
    let p = {
      ds: db,
      cmd: rptname,
      paras: rptparas,
      rtype: resulttype,
      token: token,
      source: source
    };
    return p;
  },
  getParas: function(db, rptname, rptparas, source) {
    if (source === undefined) {
      source = "h8610";
    } else {
      source = "h8610." + source;
    }

    // let token = Cookie.Get("token");
    let  token = 'B0245B6926E648AA814409E2853CA40E'
    let p = {
      ds: db,
      cmd: rptname,
      paras: rptparas,
      token: token,
      source: source
    };
    return p;
  },
  getJsonObj: function(db, rptname, json) {
    // let token = Cookie.Get("token");
    let  token = 'B0245B6926E648AA814409E2853CA40E'
    let p = {
      ds: db,
      cmd: rptname,
      jsonobj: json,
      token: token
    };
    return p;
  },

  getPubParas: function(db, rptname) {
    let p = {
      ds: db,
      cmd: rptname
    };
    return p;
  }
};
