export const state = () => ({
  nodename: "",
  description: "",
  password: "",

  meshrf_enabled: "",
  meshrf_ssid: "",
  meshrf_ip: "",
  meshrf_netmask: "",
  meshrf_bandwidth: "",
  meshrf_power: "",
  meshrf_distance: "",

  lan_mode: "",
  lan_ip: "",
  lan_netmask: "",
  lan_dhcp_enable: "",
})

export const mutations = {
  add(state, hosts) {
    state.hosts = hosts
  }
}

export const actions = {

}

export const getters = {
  getHosts(state) {
    return state.hosts;
  },
  getHost: (state) => (hostname) => {
    return state.hosts.filter(host => host.name == hostname);
  },
  getHostsFiltered: (state) => (hostname) => {
    return state.hosts.filter(host => host.name.includes(hostname));
  },
}
