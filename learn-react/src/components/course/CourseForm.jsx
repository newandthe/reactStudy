import {useImmer} from "use-immer";
import Card from "../Card.jsx";

export default function CourseForm() {

  const [form, updateForm] = useImmer({
    title: '리액트 강의',
    description: '리액트 기초부터 실전까지',
    info: {
      level: 1,
      skill: 'React'
    }
  })

  function handleCourseForm(e) {
    e.preventDefault();
  }

  /* 아래와 같이 사용하면 프로퍼티 하나마다 다 만들어주어야함 .. 따라서 [] 대괄호를 사용하여 동적 이름을 가진 프로퍼티를 명시 가능 */
  /*
  const handleTitleChange = (e) => {
    setForm({
      // title: form.title, // 만약 이와 같이 여러개의 속성이 있을경우 하드코딩 해야함 .. 따라서 전개구문 ...을 사용하여 값을 유지
      ...form,
      title: e.target.value
    })
  }

  const handleDescriptionChange = (e) => {
    setForm({
      ...form,
      description: e.target.value
    })
  }
  */

  /* 동적 프로퍼티 명시 예제 */
  const handleChange = (e) => {
    console.log('e.target.name', e.target.name);
    updateForm((draft) => {
      draft[e.target.name] = e.target.value;
    })
  }

  const handleSkillChange = (e) => {

    updateForm((draft) => {
      draft.info.skill = e.target.value;
    })
    /*
    만약 얕은 복사로 최상위 뿐만 아니라 하위 속성들 또한 참조 없이 복사를 하고 싶다면 아래와 같이 작성. 혹은 위의 Immer 라이브러리 사용
    setForm({
      ...form,
      info: {
        ...form.info,
        skill: e.target.value
      }
    })*/
  }

  const handleLevelChange = (e) => {
    updateForm((draft) => {
      draft.info.level = e.target.value;
    })
  }

  return (
    <Card title="강의 등록">
      <form style={{display: "flex", flexDirection: "column", gap: '1rem'}} onSubmit={handleCourseForm}>
        <input name="title" type="text" placeholder="강의 제목" value={form.title} onChange={handleChange}/>
        <input name="description" type="text" placeholder="강의 한줄 설명" value={form.description} onChange={handleChange}/>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <label htmlFor="skill" style={{width: '100px'}}>스킬</label>
          <input id="skill" name="skill" type="text" value={form.info.skill} onChange={handleSkillChange}/>
        </div>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <label htmlFor="skill" style={{width: '100px'}}>난이도</label>
          <select name={"level"} id={"level"} value={form.info.level} onChange={handleLevelChange}>
            <option value={"0"}>입문</option>
            <option value={"1"}>초급</option>
            <option value={"2"}>중급</option>
          </select>
        </div>
        <input type="submit" value="등록"/>
        {/* 둘중 하나라도 존재하는 경우 */}
        {(form.title || form.description) && (
          <div style={{marginTop: '16px', padding: '16px', backgroundColor: '#eee', borderRadius: '6px'}}>
            {form.title && (<p>제목 - {form.title}</p>)}
            {form.description && (<p>설명 - {form.description}</p>)}
            {form.info.skill && (<p>스킬 - {form.info.skill}</p>)}
            {form.info.level && (<p>난이도 - {form.info.level}</p>)}
          </div>
        )
        }
      </form>
    </Card>
  )

}