const currentVersion = 1;

const getNFs = () => {
  return fetch("/notasfiscais")
    .then((resp) => resp.json())
    .then(function (data) {
      return data.results;
    });
};

const getClis = () => {
  return fetch("/clientes")
    .then((resp) => resp.json())
    .then(function (data) {
      return data.results;
    });
};

const processaJoins = () => {
  return getNFs().then((nfs) => {
    return getClis().then((clis) => {
      let arrResult: Record<string, any>[] = [];
      nfs.forEach((nfs: Record<string, any>, idx: number) => {
        clis.forEach((clis: Record<string, any>, idy: number) => {
          if (nfs[idx].idCliente === clis[idy].id) {
            arrResult.push(Object.assign(nfs[idx], clis[idy]));
          }
        });
      });
      localStorage.setItem("nfsClisJoin", JSON.stringify(arrResult));
      localStorage.setItem("version", currentVersion.toString());
      return arrResult;
    });
  });
};

export const getJoins = () => {
  const nfsClisJoin = localStorage.getItem("nfsClisJoin");
  const version = localStorage.getItem("version");

  if (!nfsClisJoin || !version || Number(version) < currentVersion)
    return processaJoins();

  return JSON.parse(nfsClisJoin);
};
