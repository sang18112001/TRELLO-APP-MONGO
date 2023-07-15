const obj = {
  issues: [
    {
      id: nanoid(),
      stateIssues: 'to-do',
      titleIssues: 'NTS 1',
      issue: [
        {
          id: nanoid(),
          stateIssue: 'to-do',
          titleIssue: 'The understand HTML and CSS',
          checkList: [
            {
              id: nanoid(),
              stateCheckList: false,
              titleCheckList: 'HTML'
            },
            {
              id: nanoid(),
              stateCheckList: false,
              titleCheckList: 'CSS'
            },
          ]
        },
        {
          id: nanoid(),
          stateIssue: 'to-do',
          titleIssue: 'The understand JavaScript',
          checkList: [
            {
              id: nanoid(),
              stateCheckList: false,
              titleCheckList: 'JS'
            },
            {
              id: nanoid(),
              stateCheckList: false,
              titleCheckList: 'React'
            },
          ]
        },
      ]
    },
    {
      id: nanoid(),
      stateIssues: 'to-do',
      titleIssues: 'NTS 2',
      issue: [
        {
          id: nanoid(),
          stateIssue: 'to-do',
          titleIssue: 'The understand HTML and CSS',
          checkList: [
            {
              id: nanoid(),
              stateCheckList: false,
              titleCheckList: 'HTML'
            },
            {
              id: nanoid(),
              stateCheckList: false,
              titleCheckList: 'CSS'
            },
          ]
        },
        {
          id: nanoid(),
          stateIssue: 'to-do',
          titleIssue: 'The understand JavaScript',
          checkList: [
            {
              id: nanoid(),
              stateCheckList: false,
              titleCheckList: 'JS'
            },
            {
              id: nanoid(),
              stateCheckList: false,
              titleCheckList: 'React'
            },
          ]
        },
      ]
    },

  ]
}

{/* <div className="childIssueContainer" onDragStart={(e) => handleDragStartIssue(e)}>
     <ul ref={ulRef} className="childIssueRender" onDragOver={(event) => event.preventDefault()}>
        <>
        
        </>
    </ul>
    indexTask && <ChildIssueBox setIndexTask={setIndexTask} indexIssue={indexIssue} indexTask={indexTask}
    </div> */}