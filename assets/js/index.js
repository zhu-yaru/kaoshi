/**
 * 
 * @authors cherish yii2 (cherish@cherish.pw)
 * @date    2020-12-10 16:48:28
 * @version v1.0
 * @description the core js of todolist project
 * 
 * ━━━━━━神兽出没━━━━━━
 * 　　   ┏┓　 ┏┓
 * 　┏━━━━┛┻━━━┛┻━━━┓
 * 　┃              ┃
 * 　┃       ━　    ┃
 * 　┃　  ┳┛ 　┗┳   ┃
 * 　┃              ┃
 * 　┃       ┻　    ┃
 * 　┃              ┃
 * 　┗━━━┓      ┏━━━┛ Code is far away from bugs with the animal protecting.
 *       ┃      ┃     神兽保佑,代码无bug。
 *       ┃      ┃
 *       ┃      ┗━━━┓
 *       ┃      　　┣┓
 *       ┃      　　┏┛
 *       ┗━┓┓┏━━┳┓┏━┛
 *     　  ┃┫┫　┃┫┫
 *     　  ┗┻┛　┗┻┛
 *
 * ━━━━━━感觉萌萌哒━━━━━━
 */

// 请根据考试说明文档中列出的需求进行作答
// 预祝各位顺利通过本次考试，see you next week！
// ...







// $('header').on('keyup', 'input', function(){
//   // console.log(this)
//   const value = $(this).val().trim()
//   const key = e.keyCode
//   if(key == 13){
//     return value
//   console.log(value)
//   }
  
// })


// $('#title').on('keyup', 'input', function(){

// })



// $('header > input').val()
// console.log($('header > input').val())


$('form').on('keydown',function(event){
  if(event.keyCode == 13) return false
})
$('#title').keydown(function(e){
  // window.localStorage.setItem()
  
 if(e.keyCode==13){
  
  $('#todolist').append( `
    <li>
        <input type="checkbox" />
        <p onclick="edit(1)">${$('#title').val()}</p>
        <a href="javascript:remove(1)">-</a>
    </li>
  `)
  
 }
})
$('#todolist').on('click','li > input', function(){
  // console.log(this)
$(this).parents('li').remove()
  
  $('#donelist').append(`

  <li>
      <input type="checkbox" checked="checked" />
      <p onclick="edit(4)">${$(this).nextAll('p').text()}</p>
      <a href="javascript:remove(4)">-</a>
  </li>
  `)


})
$('#todolist').on('click', 'li > a', function(){
  console.log(this)
  $(this).parents('li').remove()
})



$('#donelist').on('click','li > input', function(){
  // console.log(this)
$(this).parents('li').remove()
  
  $('#todolist').append(`

  <li>
                    <input type="checkbox" />
                    <p onclick="edit(1)">${$(this).nextAll('p').text()}</p>
                    <a href="javascript:remove(1)">-</a>
                </li>
  `)


})