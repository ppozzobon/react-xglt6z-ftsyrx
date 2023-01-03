import React from 'react';
import './index.css';
import { Select } from 'antd';
import type { SelectProps } from 'antd';

import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

const clientes: SelectProps['options'] = [
  {
    value: 'ATUAL CARGAS TRANSPORTES LTDA - 08848231000161',
    label: 'ATUAL CARGAS TRANSPORTES LTDA - 08848231000161',
  },
  {
    value: 'TLX TRANSPORTE E LOGISTICA LTDA - 15475228000296',
    label: 'TLX TRANSPORTE E LOGISTICA LTDA - 15475228000296',
  },
  {
    value: 'OTD BRASIL LOGISTICA S A - 07579025000130',
    label: 'OTD BRASIL LOGISTICA S A - 07579025000130',
  },
];

const fornecedores: SelectProps['options'] = [
  {
    value: 'REDE DE POSTOS MARAJO HIDROLANDIA LTDA - 42354394000126',
    label: 'REDE DE POSTOS MARAJO HIDROLANDIA LTDA - 42354394000126',
  },
  {
    value: 'REDE DE POSTOS MARAJO CENTRALINA LTDA - 24187119000183',
    label: 'REDE DE POSTOS MARAJO CENTRALINA LTDA - 24187119000183',
  },
  {
    value: 'POSTO AGRICOPEL LTDA. - 83488882000456',
    label: 'POSTO AGRICOPEL LTDA. - 83488882000456',
  },
];

const fechamentos: SelectProps['options'] = [
  { label: 'DEZENAL + 10', value: 'DEZENAL + 10' },
  { label: 'DEZENAL + 15', value: 'DEZENAL + 15' },
  { label: 'DEZENAL + 20', value: 'DEZENAL + 20' },
  { label: 'DEZENAL + 45', value: 'DEZENAL + 45' },
  { label: 'SEMANAL + 5', value: 'SEMANAL + 5' },
  { label: 'SEMANAL + 7', value: 'SEMANAL + 7' },
  { label: 'DIÁRIO + 3', value: 'DIÁRIO + 3' },
  { label: 'DIÁRIO + 5', value: 'DIÁRIO + 5' },
];

const movimentos: SelectProps['options'] = [
  { label: 'VENDA', value: 'VENDA' },
  { label: 'SAQUE', value: 'SAQUE' },
  { label: 'PIX', value: 'PIX' },
  { label: 'CONTESTAÇÃO', value: 'CONTESTAÇÃO' },
];

const status: SelectProps['options'] = [
  { label: 'AUTORIZADO', value: 'AUTORIZADO' },
  { label: 'FATURADO', value: 'FATURADO' },
  { label: 'EXCLUÍDO', value: 'EXCLUÍDO' },
];

const tipo_conta: SelectProps['options'] = [
  { label: 'CORRENTE', value: 'CORRENTE' },
  { label: 'CRÉDITO', value: 'CRÉDITO' },
  { label: 'CARTÃO PAGAMENTO', value: 'CARTÃO PAGAMENTO' },
];

// for (let i = 10; i < 36; i++) {
//   options.push({
//     value: i.toString(36) + i,
//     label: i.toString(36) + i,
//   });
// }

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const App: React.FC = () => [
  <DatePicker
    onChange={onChange}
    placeholder="Emissão de.."
    style={{ width: '50%' }}
  />,
  <DatePicker
    onChange={onChange}
    placeholder="até.."
    style={{ width: '50%' }}
  />,
  <Select
    mode="tags"
    style={{ width: '50%' }}
    placeholder="Tipo movimento"
    onChange={handleChange}
    options={movimentos}
  />,
  <Select
    mode="tags"
    style={{ width: '50%' }}
    placeholder="Status"
    onChange={handleChange}
    options={status}
  />,
  <Select
    mode="tags"
    style={{ width: '50%' }}
    placeholder="Tipo conta"
    onChange={handleChange}
    options={tipo_conta}
  />,
  <Select
    mode="tags"
    style={{ width: '50%' }}
    placeholder="Tipo Fechamento"
    onChange={handleChange}
    options={fechamentos}
  />,
  <Select
    mode="tags"
    style={{ width: '50%' }}
    placeholder="Incluir cliente"
    onChange={handleChange}
    options={clientes}
  />,
  <Select
    mode="tags"
    style={{ width: '50%' }}
    placeholder="Incluir Fornecedor"
    onChange={handleChange}
    options={fornecedores}
  />,
  <Select
    mode="tags"
    style={{ width: '50%' }}
    placeholder="Remover cliente"
    onChange={handleChange}
    options={clientes}
  />,
  <Select
    mode="tags"
    style={{ width: '50%' }}
    placeholder="Remover Fornecedor"
    onChange={handleChange}
    options={fornecedores}
  />,
  <Select
    mode="tags"
    style={{ width: '50%' }}
    placeholder="Incluir Movimentos código.."
    onChange={handleChange}
  />,
  <Select
    mode="tags"
    style={{ width: '50%' }}
    placeholder="Remover Movimentos código.."
    onChange={handleChange}
  />,
];

export default App;
