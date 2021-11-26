$(document).ready(function () {
  $('a[data-confirm]').click(function (ev) {
    var href = $(this).attr('href');
    if (!$('#confirm-delete').length) {
      $('body').append(`
      <div id="confirm-delete" style="height: 100%; width: 100%; position: fixed; z-index: 3; display: flex; justify-content: center; align-items: center">
        <div id="CONFIRMbackground" style="height: 100%; width: 100%; background-color: var(--primaria); filter: invert(1); opacity: .3;"></div>
        <div id="CONFIRMwindow"
          style="position: absolute; padding: 2rem; background-color: var(--primaria); border-radius: 10px"
          role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div id="CONFIRMheader" style="width: 100%; text-align: center">
            <h4>Excluir Item</h4>
          </div>
          <div id="CONFIRMcontent" style="display: flex; flex-direction: column; align-items: center;">
            <p>Tem certeza de que deseja excluir o item selecionado?</p>
            <div id="CONFIRMbuttons" style="width: 80%; display: flex; justify-content: space-between;">
              <a id="dataComfirmOK">
                <button type="button" id="simApaga">Sim</button>
              </a>
              <button type="button" id="naoApaga">Não</button>
            </div>
          </div>
        </div>
      </div>
      `);
      $('#dataComfirmOK').attr('href', href);
      $('#confirm-delete').click(e => {
        if (e.target == $('#naoApaga')[0])
          $('#confirm-delete').remove();
      });
    }
    return false;
  });
});
