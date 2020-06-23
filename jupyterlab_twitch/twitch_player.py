import ipywidgets as ipywidgets
import traitlets
from ipywidgets import widget_serialization

from ._version import EXTENSION_VERSION

@ipywidgets.register
class TwitchPlayerModel(ipywidgets.DOMWidget):
    _model_name = traitlets.Unicode('TwitchPlayerModel').tag(sync=True)
    _model_module = traitlets.Unicode('@data-exp-lab/jupyterlab-twitch').tag(sync=True)
    _model_module_version = traitlets.Unicode(EXTENSION_VERSION).tag(sync=True)
    _view_name = traitlets.Unicode('TwitchPlayerView').tag(sync=True)
    _view_module = traitlets.Unicode('@data-exp-lab/jupyterlab-twitch').tag(sync=True)
    _view_module_version = traitlets.Unicode(EXTENSION_VERSION).tag(sync=True)

    channel = traitlets.Unicode("mst3k").tag(sync=True)
    width = traitlets.Union([traitlets.CInt(500), traitlets.Unicode()]).tag(sync=True)
    height = traitlets.Union([traitlets.CInt(500), traitlets.Unicode()]).tag(sync=True)
    volume = traitlets.CFloat(0.2).tag(sync=True)
    muted = traitlets.Bool(False).tag(sync=True)