interface AddNoteProp {
    handlerAddNote: any;
  }
export default function AddNoute(props: AddNoteProp): JSX.Element  {

    return (
        <>
            <div>
                <form onSubmit={props.handlerAddNote}>
                  <fieldset>
                    <legend>Добавить заметку</legend>
                    <label htmlFor="contentInput">Текст   </label>
                    <input
                      id = "contentInput"
                      placeholder="Введите текст"
                    />
                    <button>Добавить</button>                        
                  </fieldset>
                </form>
            </div>
        </>
    )
}