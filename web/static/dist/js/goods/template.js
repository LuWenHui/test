(function ($) {
    function batch(){
        $(document).on('click', ".batch-price", function () {
            var d = dialog({
                title: '批量添加信息',
                content: '<input type="text" id="price" value="" style="width: 50%;"><input style="margin-left: 10px;" type="button" value="确定" id="confirm">',
                quickClose: true,
                width: 120,
                heigth: 20
            });
            d.show($(this)[0]);

            var target = $(this).data('target');

            $('#confirm').click(function (e) {
                var price = $('#price').val();

                if(!isNaN(price)){
                    $(target).val(price);
                    d.close().remove();
                }else{
                    alert("请输入数字!");
                }
            });
        });
    }

    batch();
})(jQuery);

function makeSku() {
    var HEADER = "<th width='100px'>商品价格" +
        "<a><span class='glyphicon glyphicon-edit batch-price pull-right' data-target='.memberPrice'></span><a>" +
        "</th>" +
        "<th width='100px'>市场价格" +
        "<a><span class='glyphicon glyphicon-edit batch-price pull-right' data-target='.marketPrice'></span></a>" +
        "</th>" +
        "<th width='100px'>进货价格" +
        "<a><span class='glyphicon glyphicon-edit batch-price pull-right' data-target='.enterPrice'></span></a>" +
        "</th>" +
        "<th width='100px'>库存" +
        "<a><span class='glyphicon glyphicon-edit batch-price pull-right' data-target='.stock'></span></a>" +
        "</th>" +
        "<th width='100px'>利润" +
        "<a><span class='glyphicon glyphicon-edit batch-price pull-right' data-target='.profit'></span></a>" +
        "</th>" +
        "<th width='160px'>条形码" +
        "<a><span class='glyphicon glyphicon-edit batch-price pull-right' data-target='.barCode'></span></a>" +
        "</th>";

    var BODY = "<tr id=':sku'>:Tds" +
        "<input type='hidden' name='sku[:sku][remark]' value=':Text'>" +
        "<td>" +
        "<input type='text' class='form-control memberPrice' name='sku[:sku][memberPrice]' placeholder='商品价格' value='0'>" +
        "</td>" +
        "<td>" +
        "<input type='text' class='form-control marketPrice' name='sku[:sku][marketPrice]' placeholder='市场价格' value='0'>" +
        "</td>" +
        "<td>" +
        "<input type='text' class='form-control enterPrice' name='sku[:sku][enterPrice]' placeholder='进货价格' value='0'>" +
        "</td>" +
        "<td><input type='text' class='form-control stock' name='sku[:sku][stock]' placeholder='库存' value='0'></td>" +
        "<td><input type='text' class='form-control profit' name='sku[:sku][profit]' placeholder='利润' value='0'></td>" +
        "<td><input type='text' class='form-control barCode' name='sku[:sku][barCode]' placeholder='条形码' value=''></td>" +
        "</tr>";

    var SKU_NAME = 'sku_name';

    var SKU_CHECKBOX = "sku_checkbox";

    var SKU_VALUE = 'sku_value';

    // 创建表格中显示规格名称的这一列
    function createNameTd(id) {
        var td = document.createElement('td');
        // 创建输入框，放入第一列中
        var input = document.createElement('input');
        input.name = SKU_NAME + '['+ id+']';
        input.classList.add('form-control', SKU_NAME);
        input.setAttribute('data-id', id);

        td.appendChild(input);

        return td;
    }

    // 创建表格中显示值得这一列
    function createValueTd(id) {
        var td = document.createElement('td');
        // 创建增加按钮
        var btn = document.createElement('button');
        btn.innerText = "添加";
        btn.type = "button";
        btn.setAttribute('data-for-id', id);
        btn.classList.add('btn','btn-primary', 'btn-sm', 'btnn');

        //new addEvent(btn);

        td.appendChild(btn);

        return td;
    }

    // 创建复选框和输入框的组合
    function createCheckInput(parentId, id) {
        var container = document.createElement('div');
        container.classList.add('col-sm-3');
        container.style.width = '200px';

        var group = document.createElement('div');
        group.classList.add('input-group');


        var span = document.createElement('span');
        span.classList.add('input-group-addon');

        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.classList.add(SKU_CHECKBOX);
        checkbox.name = SKU_CHECKBOX + "[" + parentId + "][" + id + "]";
        checkbox.setAttribute('data-for-id', parentId);
        checkbox.setAttribute('data-id', id);

        var input = document.createElement('input');
        input.type = "input";
        input.classList.add(SKU_VALUE);
        input.name = SKU_VALUE + "[" + parentId + "][" + id + "]";
        input.classList.add('form-control');
        input.setAttribute('data-id', id);

        span.appendChild(checkbox);
        group.appendChild(span);
        group.appendChild(input);

        container.appendChild(group);
        return container;
    }

    // 获取哪些已经是选中的数据
    function getChecked() {
        var result = [];
        $("." + SKU_NAME).each(function () {
            var checkboxes = $(":checkbox[data-for-id="+$(this).data('id')+"]:checked");
            if (checkboxes.length > 0) {
                result.push(checkboxes);
            }
        });

        return result;
    }

    function getItems(values, i) {
        if (i == undefined) {
            i = 0;
        }
        var result = [];
        var z = 0;
        if (values.length == i + 1) {
            for (var h = 0;h < values[i].length;h++) {
                result[z] = [];
                result[z].push(values[i][h]);
                z++;
            }
            return result;
        }

        var temp = getItems(values, i + 1);

        for (var j = 0;j < values[i].length;j++) {
            for (var k = 0;k < temp.length;k++) {  // 二维数组
                result[z] = [];
                result[z].push(values[i][j]);
                result[z] = result[z].concat(temp[k]);
                z++;
            }
        }

        return result;
    }

    function makeHeader(item) {
        var result = "";
        for (var i in item) {
            var forId = $(item[i]).data('forId');
            var text = $("." + SKU_NAME + "[data-id=" + forId + "]").val();
            result += "<th>" + text + "</th>"
        }

        $("#skuHeader").html(result + HEADER);
    }

    function makeHtml(items) {
        
        function ItemAdapter(item) {
            var ids = [];
            var values = [];
            var texts = [];
            this.getId = function () {
                return ids.join(";");
            };
            
            this.getText = function () {
                return texts.join(";");
            };

            this.getValues = function () {
                return values;
            };

            this.getTds = function () {
                return "<td class='sku'>" + values.join("</td><td class='sku'>") + "</td>";
            };
            
            function init(checkboxes) {
                for (var i in checkboxes) {
                    item = $(checkboxes[i]);

                    var forId = item.data('forId');
                    var id = item.data('id');

                    ids.push(forId + ":" + id);
                    var input = $("." + SKU_VALUE + "[name='" + SKU_VALUE + "[" + forId + "][" + id + "]']");

                    values.push(input.val());
                    var label = $("." + SKU_NAME + "[data-id=" + forId + "]").val();

                    texts.push(label + ":" + input.val());
                }
            }

            init(item)
        }

        function clear(ids) {
            var trs = $("#skuBody").find('tr');

            if (trs.length > 0) {
                for (var i = 0; i < trs.length; i++) {
                    if ($.inArray($(trs[i]).attr('id'), ids) == -1) {
                        $(trs[i]).remove();
                    }
                }
            }
        }

        function makeBody(items) {
            var objects = [];
            var ids = [];
            for (var i in items) {
                var obj = new ItemAdapter(items[i]);
                objects.push(obj);
                ids.push(obj.getId());
            }
            // 清除冗余行数
            clear(ids);

            var trs = [];

            if (items.length > 0) {
                for (var i = 0; i < ids.length; i++) {
                    // 已经存在的，需要更新一下规格值文字
                    var tr = $("tr[id='" + ids[i] + "']");
                    var obj = objects[i];
                    if (tr.length > 0) {
                        tr.find('.sku').remove();
                        tr.find(':hidden').val(obj.getText());
                        tr.prepend(obj.getTds());
                        trs.push(tr);
                    } else {
                        console.log(2, obj.getTds());
                        var html = BODY.replace(/:sku/g, obj.getId()).replace(/:Text/g, obj.getText()).replace(/:Tds/g, obj.getTds());
                        trs.push($(html));
                    }
                }
            }

            $("#skuBody").html('');
            for (var i = 0; i < trs.length; i++) {
                $("#skuBody").append(trs[i]);
            }
        }
        makeBody(items);
    }

    function addEvent() {
        $(document).on('click','.btnn', function() {
            var id = $(this).attr('data-for-maxid');
            id = ++id | 1000;
            $(this).attr('data-for-maxid',id);
            var ele = createCheckInput($(this).data('forId'), id);
            $(this).before(ele);
        });
    }

    function init() {
        var id = 1000;
        if (window.max != 0) {
            id = ++window.max;
        }
        // 按钮点击事件，新增一行数据
        $(document).on('click', '#skuBtnAdd', function () {
            var sku = document.getElementById('tbodySku');
            var tr = document.createElement('tr');
            tr.appendChild(createNameTd(id));
            tr.appendChild(createValueTd(id));
            ++id;
            sku.appendChild(tr);
        });

        $(document).on('keypress input keydown drop paste', "." + SKU_NAME, function () {
            var values = getChecked();

            if (values.length > 0) {
                var items = getItems(values, 0);
                makeHeader(items[0]);
            }
        });

        $(document).on('click', "." + SKU_CHECKBOX, function () {
            var values = getChecked();

            if (values.length > 0) {
                var items = getItems(values, 0);
                makeHeader(items[0]);
                makeHtml(items);
            } else {
                $("#skuBody").html('');
                $("#skuHeader").html('');
            }
        });

        $(document).on('keypress input keydown drop paste', '.' + SKU_VALUE, function () {
            var values = getChecked();

            if (values.length > 0) {
                var items = getItems(values, 0);
                makeHeader(items[0]);
                makeHtml(items);
            }
        })
    }

    init();
    addEvent();
}

makeSku();
