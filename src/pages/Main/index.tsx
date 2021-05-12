import React, { useCallback, useState } from "react";
import {
  removeObjectProperty,
  orderArray,
  Order,
  processAfterWait,
} from "utils";

import * as S from "./styles";

export const Main: React.FC = () => {
  const [test1, setTest1] = useState<string | null>(null);
  const [test2, setTest2] = useState<string | null>(null);
  const [test3, setTest3] = useState<string | null>(null);

  const handleTest1 = useCallback(() => {
    const user = {
      id: 12346,
      first_name: "Bruno",
      last_name: "Bitencourt",
      age: "40",
    };
    const response = removeObjectProperty(user, "age");
    setTest1(JSON.stringify(response));
  }, []);

  const handleTest2 = useCallback((order: Order) => {
    const numbers: number[] = [5, 2, 1, 0, 9, 8, 7, 6, 4];
    const response = orderArray(numbers, order);
    setTest2(JSON.stringify(response));
  }, []);

  const handleTest3 = useCallback(async () => {
    const response = await processAfterWait();
    setTest3(response.toString());
  }, []);

  return (
    <S.Container>
      <S.Box>
        <S.Title>Test #1</S.Title>
        <S.Text>
          Implemente uma função para remover a propriedade de determinado
          objeto. Caso a propriedade não exista, a função deverá retornar false.
          Em caso de sucesso na remoção da propriedade, a função deverá retornar
          true.
        </S.Text>
        <S.Subtitle>Object</S.Subtitle>
        <S.Code>
          {`{ id: 12346, first_name: "Bruno", last_name: "Bitencourt", age: "40" }`}
        </S.Code>
        <S.Subtitle>Code</S.Subtitle>
        <S.Code>
          <pre>
            <code>{`export const removeObjectProperty = (
  object: Record<string, any>,
  property: string
): Record<string, any> | boolean => {
  if (!object) return false;
  if (!property) return false;

  const objectKeys = Object.keys(object);
  const hasProperty = objectKeys.includes(property);

  if (!hasProperty) return false;

  delete object[property];

  return object;
};
`}</code>
          </pre>
        </S.Code>
        {test1 && (
          <>
            <S.Subtitle>Result</S.Subtitle>
            <S.Code>{test1}</S.Code>
          </>
        )}
        <S.ButtonWrapper>
          {test1 && (
            <S.Button className="reset" onClick={() => setTest1(null)}>
              Reset
            </S.Button>
          )}
          <S.Button onClick={handleTest1}>Remove "age"</S.Button>
        </S.ButtonWrapper>
      </S.Box>
      <S.Box>
        <S.Title>Test #2</S.Title>
        <S.Text>
          Um sistema hipotético possui como requisito rodar no Baidu Browser.
          Implemente uma função para ordenação crescente ou decrescente (opção
          por parâmetro) de um array numérico, lembrando que este browser não
          comporta a função “Array.sort()”.
        </S.Text>
        <S.Subtitle>Array</S.Subtitle>
        <S.Code>{`[5, 2, 1, 0, 9, 8, 7, 6, 4]`}</S.Code>
        <S.Subtitle>Code</S.Subtitle>
        <S.Code>
          <pre>
            <code>
              {`export type Order = "desc" | "asc";

export const orderArray = (array: number[], order: Order) => {
  const isArray = Array.isArray(array);
  if (!isArray) return false;
  if (!order) return false;

  let done: boolean = false;

  while (!done) {
    done = true;
    for (let i = 1; i < array.length; i += 1) {
      if (order === "desc") {
        if (array[i - 1] < array[i]) {
          done = false;
          let temp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = temp;
        }
      }

      if (order === "asc") {
        if (array[i - 1] > array[i]) {
          done = false;
          let temp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = temp;
        }
      }
    }
  }

  console.log(array);
  return array;
};`}
            </code>
          </pre>
        </S.Code>
        {test2 && (
          <>
            <S.Subtitle>Response</S.Subtitle>
            <S.Code>{test2}</S.Code>
          </>
        )}
        <S.ButtonWrapper>
          {test2 && (
            <S.Button className="reset" onClick={() => setTest2(null)}>
              Reset
            </S.Button>
          )}
          <S.Button onClick={() => handleTest2("asc")}>Order by ASC</S.Button>
          <S.Button onClick={() => handleTest2("desc")}>Order by DESC</S.Button>
        </S.ButtonWrapper>
      </S.Box>

      <S.Box>
        <S.Title>Test #3</S.Title>
        <S.Text>
          Dado o snippet abaixo, implemente a função processAfterWait, que
          deverá chamar waitALittle e waitABit paralelamente. A função
          processAfterWait deverá salvar no localstorage a informação de quantos
          milissegundos demorou o término do processamento.
        </S.Text>
        <S.Subtitle>Code</S.Subtitle>
        <S.Code>
          <pre>
            <code>
              {`import { differenceInMilliseconds } from "date-fns";

const waitALittle = () => {
  return new Promise<void>((r) => {
    setTimeout(() => r(), 1500);
  });
};

const waitABit = (timeout: number) => {
  return new Promise<void>((z) => {
    setTimeout(() => z(), timeout);
  });
};

export const processAfterWait = async () => {
  const startProcess = new Date();
  await Promise.all([waitALittle(), waitABit(2000)]);
  const endProcess = new Date();

  const diff = differenceInMilliseconds(endProcess, startProcess);
  localStorage.setItem("processTime", diff.toString());

  localStorage.getItem("processTime");

  return diff.toString();
};
`}
            </code>
          </pre>
        </S.Code>
        {test3 && (
          <>
            <S.Subtitle>Response</S.Subtitle>
            <S.Code>{test3}</S.Code>
          </>
        )}
        <S.ButtonWrapper>
          {test3 && (
            <S.Button className="reset" onClick={() => setTest3(null)}>
              Reset
            </S.Button>
          )}
          <S.Button onClick={handleTest3}>Execute</S.Button>
        </S.ButtonWrapper>
      </S.Box>
      <S.Box>
        <S.Title>Test #4</S.Title>
        <S.Text>
          Dado a seguinte função processaJoins, que reúne informações de 2
          requisições diferentes, construa um mecanismo de cache, tendo em vista
          que as requisições podem retornar um volume considerável de registros
          e o processamento frequente tende a impactar a performance para o
          usuário final.
        </S.Text>
        <S.Subtitle>Code</S.Subtitle>
        <S.Code>
          <pre>
            <code>
              {`const currentVersion = 1;

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
`}
            </code>
          </pre>
        </S.Code>
      </S.Box>
      <S.Box>
        <S.Title>Test #5</S.Title>
        <S.Text>
          Explique com suas palavras e monte um cenário (uma página html)
          demonstrando o funcionamento das propriedades de Event Bubbling do
          Javascript.
        </S.Text>
        <S.Subtitle>Response</S.Subtitle>
        <S.Code>
          Event Bubbling é um tipo de propagação de evento. Onde o evento
          dispara primeiro no elemento de destino mais interno e, em seguida,
          dispara sucessivamente nos "pais" até atingir o elemento mais externo.
        </S.Code>
      </S.Box>
    </S.Container>
  );
};
