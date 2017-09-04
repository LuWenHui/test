(function ($) {
    function init() {
        this.index = window.index;
        $("#addProperty").unbind('click').bind('click', () => createPropertyTag());

        bind();
        onSubmit();
    }

    function createPropertyTag() {

        var textareaTdId = "textArea-" + this.index;
        var index = this.index;

        var tag =
"<tr>" +
    "<td>" +
    "<button type='button' class='btn btn-link delete'>删除</button>" +
    "</td>" +
    "<td><input type='text' class='form-control propertyName' name='property[" + index + "][name]' value=''> </td>" +
    "<td>" +
    "<select class='form-control propertyType' data-for-id='" + index + "' name='property[" + index + "][type]'>" +
    "<option value='1'>文本</option>" +
    "<option value='2'>规格</option>" +
    "<option value='3'>单选</option>" +
    "</select>" +
    "</td>" +
    "<td id='" + textareaTdId + "'></td>" +
"</tr>"
;
        
        $("#addPropertyContainer").append(tag);

        bind();

        this.index++;
    }

    function bind()
    {
        $(".propertyType").off('change').on('change', function (e) {
            var forId = $(this).data('forId');
            var textareaEle = $("#textArea-" + forId);
            var textareaAuto = "<textarea class='form-control col-sm-12 propertyValues' name='property[" + forId + "][values]' placeholder='请输入可选择值，以英文逗号分隔'></textarea>";
            if($.inArray(parseInt($(this).val()), [2,3]) != -1 && !textareaEle.data('hasInit')) {
                textareaEle.data('hasInit', true);
                textareaEle.append(textareaAuto);
                return;
            }
            if ($(this).val() == '1'){
                textareaEle.html('');
                textareaEle.data('hasInit', false);
            }
        });

        $(".delete").off('click').on('click', function () {
            $(this).parents('tr').remove();
        });
    }

    // 当提交创建类目进行提交的时候
    function onSubmit()
    {
        $("form").on('submit', function () {

            var hasError = false;
            $(".propertyName,.propertyType,.propertyValues").each(function () {
                if ($(this).val() == '') {
                    hasError = true;
                    alert('存在未输入项~~');
                    $(this).focus();
                    return false;
                }
            });

            if (hasError) {
                return false;
            }
        });
    }
    init();
})(jQuery);