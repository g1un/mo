App.run(function(){
    $(document).ready(function() {
        //select all function
        var selectAllInput = $('[data-select-all]');
        selectAllInput.each(function(idx) {
            var _selectAllInput = $(this);
            var selectAllItems = $('[data-select-all-item="' + _selectAllInput.attr('data-select-all') + '"]');
            selectAllItems.change(function(id) {
                if($(this).prop('checked') == false) {
                    _selectAllInput.prop("checked", false);
                    return;
                } else {
                    selectAllItems.each(function(el) {
                        if($(this).prop('checked') == false) {
                            _selectAllInput.prop("checked", false);
                            return false;
                        } else if(selectAllItems.length == (el+1)) {
                            _selectAllInput.prop("checked", true);
                        }
                    });
                }
            });
            $(selectAllInput[idx]).change(function() {
                if(this.checked) {
                    selectAllItems.prop("checked", true);
                } else {
                    selectAllItems.prop("checked", false);
                }
            });
        });
    });
});