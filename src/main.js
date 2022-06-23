import {
  isNationalIdentificationNumberValid, // 身分證字號
  isEInvoiceCellPhoneBarcodeValid, // 手機條碼
} from 'taiwan-id-validator'

// 日期選單
import { Datepicker } from 'vanillajs-datepicker'
import zhTW from 'vanillajs-datepicker/locales/zh-TW'
Object.assign(Datepicker.locales, zhTW);

document.addEventListener('DOMContentLoaded', () => {

  // 中文姓名
  function checkChName(el) {
    el.addEventListener('input', e => {
      setTimeout(() => {
        return e.target.value = e.target.value.replace(/[a-zA-Z0-9]|[\w\s]|[!#$€£%&'"`()*+\-.\/:：;；…,，。「」【】=<>?@{}\\\^|\[\]]/g, '')
      }, 0)
    }, false);
  }
  const jsName = document.getElementById('js_name');
  checkChName(jsName);

  // 身分證字號
  // npm：https://www.npmjs.com/package/taiwan-id-validator
  const jsId = document.getElementById('js_id');
  const jsIdHelper = document.getElementById('js_id_helper');
  const jsCheckIdBtn = document.getElementById('js_check_id');
  jsCheckIdBtn.addEventListener('click', e => {
    e.preventDefault();
    let value = jsId.value.toLocaleUpperCase();
    let result = isNationalIdentificationNumberValid(value);
    if(result) {
      jsIdHelper.classList.remove('badge-warning');
      jsIdHelper.classList.add('badge-success');
      jsIdHelper.innerText = '正確';
    } else {
      jsIdHelper.classList.remove('badge-success');
      jsIdHelper.classList.add('badge-warning');
      jsIdHelper.innerText = '錯誤'
    }
  }, false);

  // 手機載具
  const jsPhoneId = document.getElementById('js_phoneId');
  const jsPhoneIdHelper = document.getElementById('js_phoneId_helper');
  const jsCheckPhoneIdBtn = document.getElementById('js_check_phoneId');
  jsCheckPhoneIdBtn.addEventListener('click', e => {
    e.preventDefault();
    let value = jsPhoneId.value.toLocaleUpperCase();
    let result = isEInvoiceCellPhoneBarcodeValid(value);
    if(result) {
      jsPhoneIdHelper.classList.remove('badge-warning');
      jsPhoneIdHelper.classList.add('badge-success');
      jsPhoneIdHelper.innerText = '正確';
    } else {
      jsPhoneIdHelper.classList.remove('badge-success');
      jsPhoneIdHelper.classList.add('badge-warning');
      jsPhoneIdHelper.innerText = '錯誤'
    }
  }, false);

  // 生日
  // 文件：https://mymth.github.io/vanillajs-datepicker/#/
  const birthday = document.getElementById('js_birthday');
  const datepicker = new Datepicker(birthday, {
    format: 'yyyy-mm-dd',
    language: 'zh-TW'
  });

  // email
  const jsEmail = document.getElementById('js_email');
  const jsEmailHelper = document.getElementById('js_email_helper');
  const jsCheckEmailBtn = document.getElementById('js_check_email');
  jsCheckEmailBtn.addEventListener('click', e => {
    e.preventDefault();
    const rex = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
    if(jsEmail.value.search(rex) === -1) {
      jsEmailHelper.classList.remove('badge-success');
      jsEmailHelper.classList.add('badge-warning');
      jsEmailHelper.innerText = '錯誤'
      return false;
    }
    else {
      jsEmailHelper.classList.remove('badge-warning');
      jsEmailHelper.classList.add('badge-success');
      jsEmailHelper.innerText = '正確';
      return true;
    }
  }, false);

  // 手機
  const jsPhone = document.getElementById('js_phone');
  const jsPhoneHelper = document.getElementById('js_phone_helper');
  const jsCheckPhoneBtn = document.getElementById('js_check_phone');
  jsCheckPhoneBtn.addEventListener('click', e => {
    e.preventDefault();
    const rex = /^(09)[0-9]{8}$/;
    if(jsPhone.value.search(rex) === -1) {
      jsPhoneHelper.classList.remove('badge-success');
      jsPhoneHelper.classList.add('badge-warning');
      jsPhoneHelper.innerText = '錯誤'
      return false;
    }
    else {
      jsPhoneHelper.classList.remove('badge-warning');
      jsPhoneHelper.classList.add('badge-success');
      jsPhoneHelper.innerText = '正確';
      return true;
    }
  }, false);
  jsPhone.addEventListener('input', e => {
    if(e.target.value.length > 10) {
      e.target.value = e.target.value.slice(0, 10);
    }
  });

  // 郵遞區號
  // 文件：https://code.essoduke.org/twzipcode/
  // JS 下載：https://github.com/essoduke/jQuery-TWzipcode/blob/master/twzipcode.js
  const twzipcode = new TWzipcode(".twzipcode", {
    county: {
      css: 'select select-bordered w-full focus:select-primary'
    },
    district: {
      css: 'select select-bordered w-full focus:select-primary'
    },
    zipcode: {
      css: 'input input-bordered w-full focus:select-primary',
      readonly: true
    }
  });

})