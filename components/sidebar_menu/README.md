# Sidebar Menu

Documentation and examples for showing the sidebar menu.

## Usage

This used the default Drupal menu structure so it can be added straight to a menu template such as `menu--sidebar-first.html.twig`:

```twig
{% include 'psulib_base:sidebar_menu' %}
```

Alternatively, parameters can be passed into the component.

```twig
{% set items = [
  {
    title: 'Example 1',
    url: 'https://example.com',
    in_active_trail: true
  },
  {
    title: 'Example 2',
    url: 'https://example.com/example',
    in_active_trail: false
  }
]}


{% include 'psulib_base:sidebar_menu' with {
  menu_name: ,
  items: items,
} %}
```
