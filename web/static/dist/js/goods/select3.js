function select3(config) {

    this.oneLevel = $(config.oneLevel); // dom 元素的ID
    this.twoLevel = $(config.twoLevel);
    this.threeLevel = $(config.threeLevel);
    this.callback = config.success;

    this.ajaxUrl = config.ajaxUrl;

    var _this = this;

    function init() {
        _this.oneLevel.bind('change', function () {
            onchange(_this.oneLevel, _this.twoLevel)
        });
        _this.twoLevel.bind('change', function () {
            onchange(_this.twoLevel, _this.threeLevel)
        } );
        _this.threeLevel.bind('change', function () {
            onchange(_this.threeLevel, null)
        });


        ajax(_this.ajaxUrl, {'id': 0}, function(data) {
            insertHtml(_this.oneLevel, data)
        });
    }


    function insertHtml(dom, data)
    {
        dom.html('');

        for (var i in data) {
            var id = data[i]['id'];
            var name = data[i]['name'];
            var html = "<option value='" + id + "'>" + name + "</option>";
            dom.append(html);
        }
    }

    function onchange(current, next)
    {
        _this.callback(current.val());

        if (next == null) {
            return;
        }

        ajax(_this.ajaxUrl, {'id': current.val()},  function(data) {
            if (data.length > 0) {
                next.show();
            } else {
                next.hide();
            }
            if (current.attr('id') == 'one-category') {
                _this.threeLevel.hide();
            }

            insertHtml(next, data);
        })
    }

    function ajax(url, data, success)
    {
        $.get(url, data, function (response) {
            if (response.code == 1) {
                success(response.data);
            } else {
                alert(response.msg);
            }
        })
    }

    init(config);
}