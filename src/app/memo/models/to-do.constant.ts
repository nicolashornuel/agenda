import {InputCheckboxComponent, InputTextComponent} from '@shared/components/input/input.component';
import {PriorityComponent} from '@shared/components/priority/priority.component';
import {TextareaComponent} from '@shared/components/textarea/textarea.component';
import {TableSet, ColumnSet, RenderFieldSet} from '@shared/models/tableSet.interface';

const columnToDo: ColumnSet[] = [
  {
    key: 'status',
    title: 'Résolu',
    type: 'custom',
    visible: true,
    render: {
      component: InputCheckboxComponent,
      valuePrepare: (row: any, col: ColumnSet) => RenderFieldSet.valuePrepare(row, col),
      valueSave: (value: any) => null
    }
  },
  {
    key: 'description',
    title: 'Déscription',
    type: 'custom',
    visible: true,
    width: '40%',
    render: {
      component: InputTextComponent,
      valuePrepare: (row: any, col: ColumnSet) => RenderFieldSet.valuePrepare(row, col),
      valueSave: (value: any) => null
    }
  },
  {
    key: 'priority',
    title: 'Priorité',
    type: 'custom',
    visible: true,
    render: {
      component: PriorityComponent,
      valuePrepare: (row: any, col: ColumnSet) => RenderFieldSet.valuePrepare(row, col),
      valueSave: (value: any) => null
    }
  },
  {
    key: 'creatingDate',
    title: 'Date de création',
    type: 'string',
    visible: true
  },
  {
    key: 'updatingDate',
    title: 'Dernière mise à jour',
    type: 'string',
    visible: true
  },
  {
    key: 'category',
    title: 'Catégorie',
    type: 'custom',
    visible: true,
    render: {
      component: InputTextComponent,
      valuePrepare: (row: any, col: ColumnSet) => RenderFieldSet.valuePrepare(row, col),
      valueSave: (value: any) => null
    }
  }
]

const dataToDo: any[] = [
  {
    status: false,
    description: 'Acheter Vélo + siège enfant + barre enfant',
    priority: 3,
    creatingDate: '',
    updatingDate: '',
    category: 'Loisirs'
  }
]

const emptyRow: any = {
    status: false,
    description: '',
    priority: 0,
    creatingDate: '',
    updatingDate: '',
    category: ''
}

export const tableToDo: TableSet = {
  title: 'À faire',
  verticaltextHeader: false,
  hover: false,
  maxiHeight: '600px',
  height: '600px',
  columnSet: columnToDo,
  data: dataToDo,
  emptyRow: emptyRow
};
