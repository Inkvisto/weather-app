import DragAndDropMain from '../DragAndDropMain'
import React from 'react'
import styles from './DragAction.module.scss'


export const state = {
  tasks: [
    { name: 'sideSheet', category: 'sideSheet', bgcolor: 'white', style: 'sideSheetBlock' },
    { name: 'input', category: 'input', bgcolor: 'pink', style: 'inputBlock' },
    { name: 'falloutWeather', category: 'falloutWeather', bgcolor: 'white', style: 'falloutWeatherBlock' },
    { name: 'day', category: 'day', bgcolor: 'white', style: 'dayBlock' },
    { name: 'dailyWeather', category: 'dailyWeather', bgcolor: 'white', style: 'dailyWeatherBlock' },
    { name: 'emptyBlock', category: 'emptyBlock', bgcolor: 'white', style: 'emptyBlock' },
    { name: 'addLocation', category: 'addLocation', bgcolor: 'white', style: 'addLocationBlock' }
  ],
};


const DragAction = () => {
  const [containerStyles, setContainerStyles] = React.useState('container')
  const [s, setState] = React.useState(state)


  const onDragStart = (ev: React.DragEvent, elementId: string) => {
    ev.dataTransfer.setData('text', elementId);
  };

  const dataStateSwitch = (dragItem: string, dropItem: string) => {

    const tasks = state.tasks.filter((task, index, tasks) => {
      if (task.name === dragItem) {
        task.category = dropItem;
      } else if (task.name === dropItem) {
        if (task.category === task.name) {
          task.category = dragItem
        }
      } else if (dragItem === dropItem) {
        tasks.map((e, i, a) => {
          if (e.name === dropItem) {
           return  e.category = dropItem
          } else {
           return  e.category = e.name
          }
        })
      }

      return task



    })



    let switchState = {
      'sideSheet': () => {
        switch (dragItem) {
          case 'day':
            state.tasks[0].style = 'daySheetBlock'

            setContainerStyles('sideSheetOnRightContainer')
            return true
          case 'sideSheet':
            state.tasks[0].style = 'sideSheetBlock'
            setContainerStyles('container')
            return true
          default:
            return false
        }
      },

      'falloutWeather': () => {
        switch (dragItem) {
          case 'emptyBlock':
            //   setContainerStyles('container')
            return true
          case 'addLocation':
            return true
          case 'falloutWeather':
            return true
          default:
            return false
        }
      },
      'dailyWeather': () => {
        switch (dragItem) {
          case 'emptyBlock':
            //   setContainerStyles('container')
            return true
          case 'addLocation':
            return true
          case 'dailyWeather':
            return true
          default:
            return false
        }
      },
      'addLocation': () => {
        switch (dragItem) {
          case 'dailyWeather':
            //   setContainerStyles('container')
            return true
          case 'emptyBlock':
            return true
          case 'falloutWeather':
            return true
          case 'addLocation':
            return true
          default:
            return false
        }
      },
      'emptyBlock': () => {
        switch (dragItem) {
          case 'dailyWeather':
            //   setContainerStyles('container')
            return true
          case 'falloutWeather':
            return true
          case 'emptyBlock':
            return true
          default:
            return false
        }
      },
      'input': () => false,
      'day': () => false
    }

    if (switchState[dropItem as keyof typeof switchState]()) {
      setState({
        ...state,
        tasks,
      });
    } else {
      return null
    }


    return (switchState[dropItem as keyof typeof switchState])()

  }




  const onDragOver = (ev: any) => {
    ev.preventDefault();

  };

  const onDrop = (ev: any, dropItem: any) => {
    let dragItem = ev.dataTransfer.getData('text');

    if (dataStateSwitch(dragItem, dropItem) === false) {
      return null
    }
    dataStateSwitch(dragItem, dropItem)

  };
  let tasks: any = {
    sideSheet: [],
    input: [],
    falloutWeather: [],
    day: [],
    dailyWeather: {},
    emptyBlock: [],
    addLocation: []
  };


  React.useEffect(() => {
    state.tasks[3].bgcolor = 'purple'
  }, [])

  s.tasks.forEach((t) => {
    const st = t.style

    tasks[t.category as keyof typeof s].push(
      <div
        key={1}
        onDragStart={(e) => onDragStart(e, t.name)}
        draggable
        style={{ display: 'grid', backgroundColor: t.bgcolor }}
        className={styles[st]}
      >
        {t.name}
      </div>
    );
  });
  const onDragEnter = (ev: any, dropItem: any) => {



  }



  return (
    <div>
      <DragAndDropMain containerStyles={containerStyles} onDragStart={onDragStart} onDragOver={onDragOver} onDrop={onDrop} onDragEnter={onDragEnter} tasks={tasks} />
    </div>
  )

}

export default DragAction